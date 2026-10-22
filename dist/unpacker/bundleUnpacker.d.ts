import { UnpackedModule } from '../types.js';
/**
 * Webpack & Vite Bundle Unpacker:
 * Webpack packages client-side apps into modules passed to a runtime registry:
 * e.g., (self.webpackChunk = self.webpackChunk || []).push([ [chunkId], { moduleId: function(e, t, r) { ... } } ])
 * Or Vite dynamic imports / ES module chunk arrays.
 *
 * This unpacker extracts every single sub-module from the bundle into an isolated file!
 */
export declare function unpackBundleModules(bundleCode: string, outputDir: string): UnpackedModule[];
