export interface DecompileOptions {
  input: string; // URL, file path, or raw JS string
  outputDir: string;
  useAi?: boolean;
  aiProvider?: 'openai' | 'gemini' | 'anthropic' | 'ollama' | 'none';
  apiKey?: string;
  modelName?: string;
  extractSourceMaps?: boolean;
  inferTypeScript?: boolean;
  cleanFolderStructure?: boolean;
}

export interface UnpackedModule {
  id: string | number;
  filePath: string;
  code: string;
  isComponent?: boolean;
  dependencies?: string[];
}

export interface DecompileResult {
  sourceUrlOrPath: string;
  outputDirectory: string;
  sourceMapFound: boolean;
  totalModulesExtracted: number;
  modules: UnpackedModule[];
  durationMs: number;
}
