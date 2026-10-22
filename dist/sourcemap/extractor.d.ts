import { UnpackedModule } from '../types.js';
/**
 * Extracts embedded or remote Source Maps.
 * In production bundles, sourcemaps are either:
 * 1. Base64 encoded at the bottom of the file (//# sourceMappingURL=data:application/json;base64,...)
 * 2. Hosted adjacent to the bundle (//# sourceMappingURL=bundle.js.map)
 * If found, this recovers 100% of the original author source code and directory hierarchy!
 */
export declare function tryExtractSourceMaps(bundleContent: string, bundleUrlOrPath: string, outDir: string): Promise<{
    found: boolean;
    modules: UnpackedModule[];
}>;
