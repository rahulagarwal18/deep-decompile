import fs from 'fs/promises';
import path from 'path';
import { DecompileOptions, DecompileResult, UnpackedModule } from './types.js';
import { tryExtractSourceMaps } from './sourcemap/extractor.js';
import { unpackBundleModules } from './unpacker/bundleUnpacker.js';
import { deobfuscateAST } from './ast/deobfuscator.js';
import { reconstructJSX } from './ast/jsxSynthesizer.js';
import { applySemanticRenaming } from './ai/reconstructor.js';
import { NeuralDecompiler } from './ai/neuralEngine.js';
import { harvestWebAssets } from './crawler/harvester.js';

export class DecompilerEngine {
  private options: DecompileOptions;
  private neuralEngine: NeuralDecompiler;

  constructor(options: DecompileOptions) {
    this.options = options;
    this.neuralEngine = new NeuralDecompiler(options.apiKey);
  }

  async run(): Promise<DecompileResult> {
    const startTime = Date.now();
    const outDir = path.resolve(this.options.outputDir);
    await fs.mkdir(outDir, { recursive: true });

    let targets: { urlOrPath: string; content: string }[] = [];

    // Step 1: Detect if input is a Webpage URL (e.g. https://site.com) vs direct JS file
    const isUrl = this.options.input.startsWith('http://') || this.options.input.startsWith('https://');

    if (isUrl && !this.options.input.endsWith('.js') && !this.options.input.endsWith('.mjs')) {
      // It's a full website! Harvest all scripts and styles
      const assets = await harvestWebAssets(this.options.input);

      for (const scriptUrl of assets.scripts.slice(0, 5)) {
        try {
          const res = await fetch(scriptUrl);
          if (res.ok) {
            targets.push({ urlOrPath: scriptUrl, content: await res.text() });
          }
        } catch {
          // Skip unreachable script
        }
      }
    } else if (isUrl) {
      const res = await fetch(this.options.input);
      if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${this.options.input}`);
      targets.push({ urlOrPath: this.options.input, content: await res.text() });
    } else {
      const content = await fs.readFile(path.resolve(this.options.input), 'utf-8');
      targets.push({ urlOrPath: this.options.input, content });
    }

    let allModules: UnpackedModule[] = [];
    let sourcemapFoundOverall = false;

    // Step 2: Process each discovered bundle
    for (const target of targets) {
      // Try sourcemaps
      if (this.options.extractSourceMaps !== false) {
        const smResult = await tryExtractSourceMaps(target.content, target.urlOrPath, outDir);
        if (smResult.found) {
          sourcemapFoundOverall = true;
          allModules.push(...smResult.modules);
          continue; // Recovered from sourcemap, skip manual unpack
        }
      }

      // Manual AST Unpack & Re-synthesis
      const rawModules = unpackBundleModules(target.content, outDir);

      for (const mod of rawModules) {
        // Pass 1: AST De-obfuscation (un-inline sequences, ternary -> if/else)
        let processed = await deobfuscateAST(mod.code);

        // Pass 2: JSX Synthesis (turn _jsx(...) back into <Component />)
        processed = reconstructJSX(processed);

        // Pass 3: Heuristic semantic renaming
        processed = await applySemanticRenaming(processed);

        // Pass 4: Neural LLM De-anonymizer (if enabled and key present)
        if (this.options.useAi && this.neuralEngine.isAvailable()) {
          processed = await this.neuralEngine.decompileFunction(processed);
        }

        allModules.push({
          ...mod,
          code: processed
        });
      }
    }

    // Step 3: Write files to disk
    for (const mod of allModules) {
      await fs.mkdir(path.dirname(mod.filePath), { recursive: true });
      await fs.writeFile(mod.filePath, mod.code, 'utf-8');
    }

    // Step 4: Generate project runnable scaffold
    await this.generateProjectScaffold(outDir, allModules);

    return {
      sourceUrlOrPath: this.options.input,
      outputDirectory: outDir,
      sourceMapFound: sourcemapFoundOverall,
      totalModulesExtracted: allModules.length,
      modules: allModules,
      durationMs: Date.now() - startTime
    };
  }

  private async generateProjectScaffold(outDir: string, modules: UnpackedModule[]) {
    const packageJsonPath = path.join(outDir, 'package.json');
    try {
      await fs.access(packageJsonPath);
    } catch {
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
          'lucide-react': '^0.475.0',
          'clsx': '^2.1.1',
          'tailwind-merge': '^3.0.1'
        },
        devDependencies: {
          typescript: '^5.7.3',
          vite: '^6.1.0',
          '@vitejs/plugin-react': '^4.3.4'
        }
      };
      await fs.writeFile(packageJsonPath, JSON.stringify(pkg, null, 2), 'utf-8');
    }

    const readmePath = path.join(outDir, 'DECOMPILED_README.md');
    const readme = `# ⚡ Decompiled Web Project
Generated by **DeepDecompile** on ${new Date().toISOString()}.

### 📊 Summary:
- **Total Modules Reconstructed:** ${modules.length}
- **Source Code Location:** \`decompiled_src/\`

### 🚀 Run this project locally:
\`\`\`bash
npm install
npm run dev
\`\`\`
`;
    await fs.writeFile(readmePath, readme, 'utf-8');
  }
}
