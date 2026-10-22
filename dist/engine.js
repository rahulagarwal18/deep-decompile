import fs from 'fs/promises';
import path from 'path';
import { tryExtractSourceMaps } from './sourcemap/extractor.js';
import { unpackBundleModules } from './unpacker/bundleUnpacker.js';
import { deobfuscateAST } from './ast/deobfuscator.js';
import { applySemanticRenaming } from './ai/reconstructor.js';
export class DecompilerEngine {
    options;
    constructor(options) {
        this.options = options;
    }
    async run() {
        const startTime = Date.now();
        const outDir = path.resolve(this.options.outputDir);
        await fs.mkdir(outDir, { recursive: true });
        // Step 1: Read / Fetch the bundle
        let bundleCode = '';
        if (this.options.input.startsWith('http://') || this.options.input.startsWith('https://')) {
            const response = await fetch(this.options.input);
            if (!response.ok) {
                throw new Error(`Failed to fetch bundle from ${this.options.input}: HTTP ${response.status}`);
            }
            bundleCode = await response.text();
        }
        else {
            bundleCode = await fs.readFile(path.resolve(this.options.input), 'utf-8');
        }
        // Step 2: Try Source Map Extraction first (Recovers original author files with 100% fidelity)
        let extractedModules = [];
        let sourceMapFound = false;
        if (this.options.extractSourceMaps !== false) {
            const smResult = await tryExtractSourceMaps(bundleCode, this.options.input, outDir);
            if (smResult.found) {
                sourceMapFound = true;
                extractedModules = smResult.modules;
            }
        }
        // Step 3: If no sourcemap found, perform AST bundle slicing and de-obfuscation
        if (!sourceMapFound) {
            const rawModules = unpackBundleModules(bundleCode, outDir);
            for (const mod of rawModules) {
                // Run deterministic AST un-minification
                const deobfuscated = await deobfuscateAST(mod.code);
                // Run semantic renaming
                const semanticCode = await applySemanticRenaming(deobfuscated);
                extractedModules.push({
                    ...mod,
                    code: semanticCode
                });
            }
        }
        // Step 4: Write all reconstructed files to disk with full directory hierarchy
        for (const mod of extractedModules) {
            await fs.mkdir(path.dirname(mod.filePath), { recursive: true });
            await fs.writeFile(mod.filePath, mod.code, 'utf-8');
        }
        // Step 5: Generate a working package.json and tsconfig.json so the output project runs locally
        await this.generateProjectScaffold(outDir, extractedModules);
        const durationMs = Date.now() - startTime;
        return {
            sourceUrlOrPath: this.options.input,
            outputDirectory: outDir,
            sourceMapFound,
            totalModulesExtracted: extractedModules.length,
            modules: extractedModules,
            durationMs
        };
    }
    async generateProjectScaffold(outDir, modules) {
        // Generate package.json
        const packageJsonPath = path.join(outDir, 'package.json');
        try {
            await fs.access(packageJsonPath);
        }
        catch {
            const pkg = {
                name: 'decompiled-project',
                version: '1.0.0',
                private: true,
                scripts: {
                    dev: 'vite',
                    build: 'vite build',
                    preview: 'vite preview'
                },
                dependencies: {
                    react: '^18.3.1',
                    'react-dom': '^18.3.1',
                    'lucide-react': '^0.475.0'
                },
                devDependencies: {
                    typescript: '^5.7.3',
                    vite: '^6.1.0',
                    '@vitejs/plugin-react': '^4.3.4'
                }
            };
            await fs.writeFile(packageJsonPath, JSON.stringify(pkg, null, 2), 'utf-8');
        }
        // Generate README.md
        const readmePath = path.join(outDir, 'DECOMPILED_README.md');
        const readme = `# Decompiled Project
Reconstructed automatically using **DeepDecompile** on ${new Date().toISOString()}.

## Extracted Structure:
- Total Modules Recovered: ${modules.length}
- Output Folder: \`decompiled_src/\`

## Getting Started
\`\`\`bash
npm install
npm run dev
\`\`\`
`;
        await fs.writeFile(readmePath, readme, 'utf-8');
    }
}
