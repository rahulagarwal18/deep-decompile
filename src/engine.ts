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

    let rawInput = this.options.input.trim();
    // Auto-normalize URLs missing protocol (e.g. www.aryannewsagency.com -> https://www.aryannewsagency.com)
    if (!rawInput.startsWith('http://') && !rawInput.startsWith('https://')) {
      if (rawInput.startsWith('www.') || (rawInput.includes('.') && !rawInput.includes('\\') && !rawInput.includes('/'))) {
        rawInput = `https://${rawInput}`;
      }
    }
    this.options.input = rawInput;

    let targets: { urlOrPath: string; content: string; baseName: string }[] = [];

    const isUrl = this.options.input.startsWith('http://') || this.options.input.startsWith('https://');

    if (isUrl && !this.options.input.endsWith('.js') && !this.options.input.endsWith('.mjs')) {
      const assets = await harvestWebAssets(this.options.input);

      for (const scriptUrl of assets.scripts) {
        try {
          const res = await fetch(scriptUrl);
          if (res.ok) {
            const urlObj = new URL(scriptUrl);
            const baseName = path.basename(urlObj.pathname).replace(/\.js$/, '');
            targets.push({ urlOrPath: scriptUrl, content: await res.text(), baseName });
          }
        } catch {
          // Skip
        }
      }
    } else if (isUrl) {
      const res = await fetch(this.options.input);
      if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${this.options.input}`);
      const urlObj = new URL(this.options.input);
      const baseName = path.basename(urlObj.pathname).replace(/\.js$/, '');
      targets.push({ urlOrPath: this.options.input, content: await res.text(), baseName });
    } else {
      const content = await fs.readFile(path.resolve(this.options.input), 'utf-8');
      const baseName = path.basename(this.options.input).replace(/\.js$/, '');
      targets.push({ urlOrPath: this.options.input, content, baseName });
    }

    let allModules: UnpackedModule[] = [];
    let sourcemapFoundOverall = false;

    for (const target of targets) {
      if (this.options.extractSourceMaps !== false) {
        const smResult = await tryExtractSourceMaps(target.content, target.urlOrPath, outDir);
        if (smResult.found) {
          sourcemapFoundOverall = true;
          allModules.push(...smResult.modules);
          continue;
        }
      }

      // Check if this bundle is a Webpack push chunk
      const isWebpack = target.content.includes('webpackChunk');
      if (isWebpack) {
        const rawModules = unpackBundleModules(target.content, outDir);
        for (const mod of rawModules) {
          let processed = await deobfuscateAST(mod.code);
          processed = reconstructJSX(processed);
          processed = await applySemanticRenaming(processed);
          allModules.push({ ...mod, code: processed });
        }
      } else {
        // Vite / ESM Chunk
        let processed = await deobfuscateAST(target.content);
        processed = reconstructJSX(processed);
        processed = await applySemanticRenaming(processed);

        const isComponent = /ArticleModal|SubmitNews|QuickRead|Modal|Admin|Panel|Card|View|React|jsx/.test(target.baseName);
        const folder = isComponent ? 'components' : 'lib';
        const ext = isComponent ? '.tsx' : '.ts';
        const cleanName = target.baseName.replace(/-[A-Za-z0-9_-]{8,}$/, ''); // Strip Vite hash (e.g. -BGWtDsL3)

        allModules.push({
          id: target.baseName,
          filePath: path.join(outDir, 'decompiled_src', folder, `${cleanName}${ext}`),
          code: processed,
          isComponent
        });
      }
    }

    // Write all decompiled modules
    for (const mod of allModules) {
      await fs.mkdir(path.dirname(mod.filePath), { recursive: true });
      await fs.writeFile(mod.filePath, mod.code, 'utf-8');
    }

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
