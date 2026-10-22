import { GoogleGenAI } from '@google/genai';
import { SymbolRenameMap } from './reconstructor.js';

/**
 * Neural AST De-anonymizer:
 * Uses Google Gemini API (or OpenAI/Ollama compatible) to transform
 * minified code functions into crystal-clear, typed TypeScript code with proper function names!
 */
export class NeuralDecompiler {
  private ai: GoogleGenAI | null = null;

  constructor(apiKey?: string) {
    const key = apiKey || process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
    if (key) {
      this.ai = new GoogleGenAI({ apiKey: key });
    }
  }

  isAvailable(): boolean {
    return this.ai !== null;
  }

  async decompileFunction(obfuscatedCode: string): Promise<string> {
    if (!this.ai) {
      return obfuscatedCode;
    }

    try {
      const prompt = `You are DeepDecompile Neural Engine.
Analyze this decompiled, minified JavaScript snippet. 
Task:
1. Infer the true purpose of the code.
2. Rename all single-letter variables (e, t, n, r, a, s) into descriptive camelCase identifiers.
3. Add TypeScript types and interfaces.
4. Output ONLY valid TypeScript/TSX code inside a markdown block.

Code to reconstruct:
\`\`\`typescript
${obfuscatedCode.slice(0, 4000)}
\`\`\`
`;

      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
      });

      const text = response.text || '';
      const match = text.match(/```(?:typescript|tsx|javascript)?\n([\s\S]*?)```/);
      if (match && match[1]) {
        return match[1].trim();
      }
      return text.trim() || obfuscatedCode;
    } catch (err) {
      // Fallback cleanly to AST code if API call fails
      return obfuscatedCode;
    }
  }
}
