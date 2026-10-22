export interface ScopeRenameMap {
    [obfuscatedName: string]: string;
}
/**
 * Deterministic AST De-obfuscator:
 * - Un-inlines comma expressions (e.g. `a(), b(), c()` -> separate statements)
 * - Converts ternary statements into readable `if-else` blocks
 * - Simplifies dead code / boolean negation (`!0` -> `true`, `!1` -> `false`)
 * - Resolves computed member accesses when possible (`obj["user"]` -> `obj.user`)
 * - Cleans mangled variable names with semantic heuristics
 */
export declare function deobfuscateAST(minifiedCode: string): Promise<string>;
