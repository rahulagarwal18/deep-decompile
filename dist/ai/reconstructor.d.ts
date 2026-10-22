export interface SymbolRenameMap {
    [oldName: string]: string;
}
/**
 * AI-assisted or Rule-Based Semantic Renaming:
 * Takes minified variable & function names (a, b, c, e, t, n) and renames them
 * according to what they actually do or what API endpoints they touch!
 */
export declare function applySemanticRenaming(code: string, customRenames?: SymbolRenameMap): Promise<string>;
/**
 * Formats a prompt for an LLM (Gemini, Claude, OpenAI, Ollama)
 * to provide intelligent rename mappings for an obfuscated code block.
 */
export declare function buildAiRenamePrompt(obfuscatedSnippet: string): string;
