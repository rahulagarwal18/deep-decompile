import { SourceMapConsumer } from 'source-map';
import path from 'path';
import fs from 'fs/promises';
import { UnpackedModule } from '../types.js';

/**
 * Extracts embedded or remote Source Maps.
 * In production bundles, sourcemaps are either:
 * 1. Base64 encoded at the bottom of the file (//# sourceMappingURL=data:application/json;base64,...)
 * 2. Hosted adjacent to the bundle (//# sourceMappingURL=bundle.js.map)
 * If found, this recovers 100% of the original author source code and directory hierarchy!
 */
export async function tryExtractSourceMaps(
  bundleContent: string,
  bundleUrlOrPath: string,
  outDir: string
): Promise<{ found: boolean; modules: UnpackedModule[] }> {
  const modules: UnpackedModule[] = [];
  
  // Check for inline base64 source map
  const inlineMatch = bundleContent.match(/\/\/[#@] sourceMappingURL=data:application\/json;(?:charset=utf-8;)?base64,([A-Za-z0-9+/=]+)/);
  let rawSourceMapJson: string | null = null;

  if (inlineMatch && inlineMatch[1]) {
    try {
      rawSourceMapJson = Buffer.from(inlineMatch[1], 'base64').toString('utf-8');
    } catch (e) {
      // Ignore invalid base64
    }
  }

  // Check for remote/relative sourceMappingURL comment
  if (!rawSourceMapJson) {
    const urlMatch = bundleContent.match(/\/\/[#@] sourceMappingURL=([^\s'"]+)/);
    if (urlMatch && urlMatch[1] && !urlMatch[1].startsWith('data:')) {
      const mapRef = urlMatch[1];
      try {
        if (bundleUrlOrPath.startsWith('http://') || bundleUrlOrPath.startsWith('https://')) {
          const mapUrl = new URL(mapRef, bundleUrlOrPath).toString();
          const res = await fetch(mapUrl);
          if (res.ok) {
            rawSourceMapJson = await res.text();
          }
        } else {
          // Local file path
          const mapPath = path.resolve(path.dirname(bundleUrlOrPath), mapRef);
          rawSourceMapJson = await fs.readFile(mapPath, 'utf-8');
        }
      } catch (err) {
        // Map file was not publicly accessible or failed
      }
    }
  }

  if (!rawSourceMapJson) {
    return { found: false, modules: [] };
  }

  try {
    const parsedMap = JSON.parse(rawSourceMapJson);
    if (parsedMap.sources && parsedMap.sourcesContent) {
      for (let i = 0; i < parsedMap.sources.length; i++) {
        let sourcePath = parsedMap.sources[i];
        const content = parsedMap.sourcesContent[i];

        if (!content) continue;

        // Clean source path (remove webpack://, vite://, node_modules/)
        sourcePath = sourcePath
          .replace(/^(webpack|vite|turbo):\/\//i, '')
          .replace(/^\.\//, '')
          .replace(/\.\.\//g, '__/');

        const fullDestPath = path.join(outDir, 'decompiled_src', sourcePath);
        
        modules.push({
          id: i,
          filePath: fullDestPath,
          code: content,
          isComponent: sourcePath.endsWith('.tsx') || sourcePath.endsWith('.jsx')
        });
      }

      return { found: modules.length > 0, modules };
    }
  } catch (err) {
    // Malformed JSON
  }

  return { found: false, modules: [] };
}
