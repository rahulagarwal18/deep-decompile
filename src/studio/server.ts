import express from 'express';
import http from 'http';
import open from 'open';
import path from 'path';
import { fileURLToPath } from 'url';
import { DecompilerEngine } from '../engine.js';
import { deobfuscateAST } from '../ast/deobfuscator.js';
import { reconstructJSX } from '../ast/jsxSynthesizer.js';
import { applySemanticRenaming } from '../ai/reconstructor.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function startStudioServer(port: number = 4242) {
  const app = express();
  app.use(express.json({ limit: '50mb' }));

  // API: Instant Decompile endpoint for the interactive side-by-side editor
  app.post('/api/decompile-snippet', async (req, res) => {
    try {
      const { code } = req.body;
      if (!code) {
        return res.status(400).json({ error: 'Code snippet is required' });
      }

      // Step 1: AST De-obfuscation
      let cleaned = await deobfuscateAST(code);
      // Step 2: JSX Synthesis
      cleaned = reconstructJSX(cleaned);
      // Step 3: Semantic Renaming
      cleaned = await applySemanticRenaming(cleaned);

      res.json({ success: true, decompiled: cleaned });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // API: Full URL/Bundle Decompile endpoint
  app.post('/api/decompile-url', async (req, res) => {
    try {
      const { url, outputDir } = req.body;
      const targetDir = outputDir || './decompiled_output';

      const engine = new DecompilerEngine({
        input: url,
        outputDir: targetDir,
        extractSourceMaps: true
      });

      const result = await engine.run();
      res.json({ success: true, result });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // Serve the Cyberpunk Web UI directly
  app.get('/', (req, res) => {
    res.send(renderStudioHtml());
  });

  const server = http.createServer(app);
  server.listen(port, () => {
    console.log(`\n⚡ DeepDecompile Studio running at: http://localhost:${port}`);
    open(`http://localhost:${port}`).catch(() => {});
  });
}

function renderStudioHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DeepDecompile Studio</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-typescript.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-jsx.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-tsx.min.js"></script>
  <style>
    body { background-color: #0b0f19; color: #e2e8f0; font-family: ui-sans-serif, system-ui, -apple-system, sans-serif; }
    .glow { box-shadow: 0 0 25px rgba(56, 189, 248, 0.15); }
    .editor-box { font-family: 'Fira Code', 'Cascadia Code', monospace; font-size: 13px; line-height: 1.5; }
  </style>
</head>
<body class="min-h-screen flex flex-col">
  <!-- Header -->
  <header class="border-b border-slate-800 bg-slate-950/60 backdrop-blur px-6 py-4 flex items-center justify-between">
    <div class="flex items-center space-x-3">
      <div class="h-9 w-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/30">
        ⚡
      </div>
      <div>
        <h1 class="text-lg font-bold tracking-tight text-white flex items-center gap-2">
          DeepDecompile <span class="text-xs bg-cyan-950 border border-cyan-800 text-cyan-400 px-2 py-0.5 rounded-full font-mono">v1.0.0 Studio</span>
        </h1>
        <p class="text-xs text-slate-400">Neural Reverse-Engineering & AST Decompiler for Production Web Apps</p>
      </div>
    </div>
    <div class="flex items-center space-x-4">
      <a href="https://github.com/rahulagarwal18/deep-decompile" target="_blank" class="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition">
        <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
        GitHub
      </a>
    </div>
  </header>

  <!-- URL Mode Bar -->
  <div class="bg-slate-900 border-b border-slate-800 px-6 py-3 flex flex-wrap items-center justify-between gap-4">
    <div class="flex-1 flex items-center gap-3">
      <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Target URL:</span>
      <input id="urlInput" type="text" placeholder="https://example.com or direct .js bundle URL" class="flex-1 bg-slate-950 border border-slate-700 rounded-md px-3 py-1.5 text-sm text-cyan-300 focus:outline-none focus:border-cyan-500 font-mono" />
      <button onclick="decompileUrl()" id="decompileUrlBtn" class="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold px-4 py-1.5 rounded-md text-sm transition flex items-center gap-2 shadow-lg shadow-cyan-500/20">
        <span>Scrape & Decompile URL</span>
      </button>
    </div>
  </div>

  <!-- Main Side-by-Side Playground -->
  <div class="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
    <!-- Left: Obfuscated Minified Code Input -->
    <div class="flex flex-col border-r border-slate-800 bg-[#070a13]">
      <div class="bg-slate-900/80 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-400">
        <span class="flex items-center gap-2">
          <span class="h-2 w-2 rounded-full bg-red-400"></span>
          MINIFIED / OBFUSCATED JAVASCRIPT
        </span>
        <div class="flex gap-2">
          <button onclick="loadSample()" class="text-xs text-cyan-400 hover:underline">Load Sample</button>
          <button onclick="decompileSnippet()" id="runSnippetBtn" class="bg-cyan-500 text-slate-950 px-3 py-1 rounded font-bold hover:bg-cyan-400 transition">⚡ Decompile AST</button>
        </div>
      </div>
      <textarea id="rawCodeInput" spellcheck="false" placeholder="Paste minified production JavaScript, webpack chunks, or React bundles here..." class="flex-1 p-4 bg-transparent text-slate-300 resize-none outline-none editor-box font-mono border-none"></textarea>
    </div>

    <!-- Right: Clean Decompiled TypeScript Output -->
    <div class="flex flex-col bg-[#070a13]">
      <div class="bg-slate-900/80 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-400">
        <span class="flex items-center gap-2">
          <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
          RECONSTRUCTED TYPESCRIPT / JSX SOURCE
        </span>
        <button onclick="copyOutput()" id="copyBtn" class="text-xs text-slate-400 hover:text-white">Copy Code</button>
      </div>
      <pre id="outputPre" class="flex-1 p-4 m-0 overflow-auto editor-box font-mono text-emerald-300 bg-transparent"><code id="outputCode" class="language-tsx">// Decompiled clean source will appear here...</code></pre>
    </div>
  </div>

  <footer class="border-t border-slate-800 bg-slate-950 px-6 py-2.5 text-xs text-slate-500 flex justify-between">
    <span>Built by <a href="https://github.com/rahulagarwal18" class="text-cyan-400 hover:underline">Rahul Agarwal (@rahulagarwal18)</a></span>
    <span>AST Engine • JSX Synthesizer • SourceMap Prober</span>
  </footer>

  <script>
    const sample = '(self.webpackChunk=self.webpackChunk||[]).push([[101],{12:function(e,t,n){"use strict";var r=n(2);function u(e){return e.preventDefault(),!0===e.isAdmin?_jsx("div",{className:"admin-card",children:"Welcome Boss"}):_jsx("div",{className:"user-card",children:"User Access Denied"})}e.exports=u}}]);';

    function loadSample() {
      document.getElementById('rawCodeInput').value = sample;
    }

    async function decompileSnippet() {
      const code = document.getElementById('rawCodeInput').value;
      if (!code.trim()) return alert('Please paste some code first!');
      const btn = document.getElementById('runSnippetBtn');
      btn.innerText = 'Processing...';

      try {
        const res = await fetch('/api/decompile-snippet', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code })
        });
        const data = await res.json();
        if (data.success) {
          document.getElementById('outputCode').textContent = data.decompiled;
          Prism.highlightElement(document.getElementById('outputCode'));
        } else {
          alert('Decompile error: ' + data.error);
        }
      } catch (err) {
        alert('Request failed: ' + err.message);
      } finally {
        btn.innerText = '⚡ Decompile AST';
      }
    }

    async function decompileUrl() {
      const url = document.getElementById('urlInput').value;
      if (!url.trim()) return alert('Please enter a target URL!');
      const btn = document.getElementById('decompileUrlBtn');
      btn.innerText = 'Scraping & Extracting...';

      try {
        const res = await fetch('/api/decompile-url', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url })
        });
        const data = await res.json();
        if (data.success) {
          alert('Decompiled ' + data.result.totalModulesExtracted + ' modules into ' + data.result.outputDirectory + '!');
          if (data.result.modules && data.result.modules.length > 0) {
            document.getElementById('outputCode').textContent = data.result.modules[0].code;
            Prism.highlightElement(document.getElementById('outputCode'));
          }
        } else {
          alert('Decompile error: ' + data.error);
        }
      } catch (err) {
        alert('Failed: ' + err.message);
      } finally {
        btn.innerText = 'Scrape & Decompile URL';
      }
    }

    function copyOutput() {
      const text = document.getElementById('outputCode').textContent;
      navigator.clipboard.writeText(text);
      const btn = document.getElementById('copyBtn');
      btn.innerText = 'Copied!';
      setTimeout(() => btn.innerText = 'Copy Code', 2000);
    }

    loadSample();
  </script>
</body>
</html>`;
}
