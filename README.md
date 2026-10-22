# ⚡ DeepDecompile

<div align="center">

```
  ██████╗ ███████╗███████╗██████╗ 
  ██╔══██╗██╔════╝██╔════╝██╔══██╗
  ██║  ██║█████╗  █████╗  ██████╔╝
  ██║  ██║██╔══╝  ██╔══╝  ██╔═══╝ 
  ██████╔╝███████╗███████╗██║     
  ╚═════╝ ╚══════╝╚══════╝╚═╝     
  ██████╗ ███████╗ ██████╗ ██████╗ ███╗   ███╗██████╗ ██╗██╗     ███████╗
  ██╔══██╗██╔════╝██╔════╝██╔═══██╗████╗ ████║██╔══██╗██║██║     ██╔════╝
  ██║  ██║█████╗  ██║     ██║   ██║██╔████╔██║██████╔╝██║██║     █████╗  
  ██║  ██║██╔══╝  ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║██║     ██╔══╝  
  ██████╔╝███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║███████╗███████╗
  ╚═════╝ ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝
```

**Neural Reverse-Engineering & AST Decompiler for Modern Web Bundles**  
*Transform minified production chunks and web bundles back into clean, readable TypeScript/React codebases.*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/Node.js-%3E%3D20-green.svg)](https://nodejs.org/)
[![Built for](https://img.shields.io/badge/Vibe_Coding-Supercharged-blueviolet.svg)](#)

</div>

---

## 💥 The Problem
When modern web apps are built for production, tools like Webpack, Vite, and Turbopack squash hundreds of files into minified single-letter gibberish:
```javascript
// What's running in production:
(self.webpackChunk=self.webpackChunk||[]).push([[123],{101:function(e,t,r){"use strict";var n=r(202);function a(e,t){return!0===e.isAdmin?n.grantAccess(t):void 0}e.exports=a}}]);
```

Traditional decompilers give you broken spaghetti or unreadable assembly. **DeepDecompile recovers the developer experience.**

---

## ✨ Features

- 🧩 **Webpack & Vite Chunk Slicing:** Automatically identifies and extracts individual modules from chunk registries into isolated files.
- 🎯 **Source Map Recovery:** Automatically detects, base64-decodes, or fetches remote source maps to recover 100% of the author's original file hierarchy.
- 🧠 **AST De-obfuscation Engine:**
  - Un-inlines comma-separated expressions (`a(), b(), c()`).
  - Converts ternary operators into readable `if-else` blocks.
  - Normalizes boolean minifications (`!0` ➔ `true`, `void 0` ➔ `undefined`).
  - Simplifies bracket property access (`obj["property"]` ➔ `obj.property`).
- 🏷️ **Semantic Context Renamer:** Recognizes parameters and DOM events (`e.preventDefault()` ➔ `event.preventDefault()`, React `useState` hooks, and API callers).
- 🚀 **1-Command Runnable Project:** Automatically generates `package.json`, Vite configuration, and directory scaffolding so you can run the recovered code immediately.

---

## ⚡ Quickstart

### 1. Run directly with NPX:
```bash
npx deep-decompile https://example.com/assets/main.min.js -o ./decompiled_app
```

### 2. Decompile a local bundle:
```bash
npx deep-decompile ./bundle.js -o ./output
```

### 3. Run the decompiled app locally:
```bash
cd ./output
npm install
npm run dev
```

---

## 🛠️ CLI Options

| Flag | Description | Default |
| :--- | :--- | :--- |
| `<input>` | URL or local file path to the bundle | *(Required)* |
| `-o, --out <dir>` | Destination folder for extracted files | `./decompiled_output` |
| `--no-sourcemap` | Skip sourcemap extraction pass | `false` |
| `--ai` | Enable AI-assisted semantic variable renaming | `false` |

---

## 📜 Architecture

```
[ Minified Bundle URL / File ]
              │
              ▼
   [ Source Map Probe ] ───(Found?)───► [ 100% Original Code Extracted ]
              │ (No)
              ▼
   [ Webpack / Vite Unpacker ]
              │
              ▼
   [ Babel AST De-obfuscator ]
   • Un-inline sequences
   • Ternary -> If/Else
   • Boolean un-mangling
              │
              ▼
   [ Semantic Identifier Renamer ]
              │
              ▼
   [ Runnable Project Scaffold ] (package.json + vite.config + TypeScript)
```

---

## 👤 Author
**Rahul Agarwal**  
- GitHub: [@rahulagarwal18](https://github.com/rahulagarwal18)  
- Website: [rahul-agarwal.in](https://rahul-agarwal.in)

## ⚖️ License
MIT License. Created for security research, lost source recovery, and educational analysis.
