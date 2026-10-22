import parser from '@babel/parser';
import traversePkg from '@babel/traverse';
import generatorPkg from '@babel/generator';
import * as t from '@babel/types';

const traverse = (traversePkg as any).default || traversePkg;
const generate = (generatorPkg as any).default || generatorPkg;

export interface SymbolRenameMap {
  [oldName: string]: string;
}

/**
 * AI-assisted or Rule-Based Semantic Renaming:
 * Takes minified variable & function names (a, b, c, e, t, n) and renames them
 * according to what they actually do or what API endpoints they touch!
 */
export async function applySemanticRenaming(
  code: string,
  customRenames?: SymbolRenameMap
): Promise<string> {
  let ast: any;
  try {
    ast = parser.parse(code, {
      sourceType: 'unambiguous',
      plugins: ['jsx', 'typescript'],
      errorRecovery: true
    });
  } catch (err) {
    return code;
  }

  // Pre-seed common semantic renames if not provided
  const renames: SymbolRenameMap = { ...customRenames };

  // Heuristic AST pass to infer names from context
  traverse(ast, {
    // Detect event handler parameters: e.g. function(e) { e.preventDefault(); } -> function(event)
    Function(astPath: any) {
      if (astPath.node.params && astPath.node.params.length > 0) {
        const firstParam = astPath.node.params[0];
        if (t.isIdentifier(firstParam) && firstParam.name === 'e') {
          // Check if preventDefault or stopPropagation is called on e
          let isEvent = false;
          astPath.traverse({
            MemberExpression(memPath: any) {
              if (
                t.isIdentifier(memPath.node.object, { name: 'e' }) &&
                t.isIdentifier(memPath.node.property) &&
                ['preventDefault', 'stopPropagation', 'target', 'currentTarget'].includes(memPath.node.property.name)
              ) {
                isEvent = true;
              }
            }
          });
          if (isEvent) {
            astPath.scope.rename('e', 'event');
          }
        }
      }
    },

    // Detect React useState pattern: const [a, b] = useState(...) -> const [stateValue, setStateValue]
    VariableDeclarator(astPath: any) {
      if (
        t.isArrayPattern(astPath.node.id) &&
        astPath.node.id.elements.length === 2 &&
        t.isCallExpression(astPath.node.init) &&
        t.isIdentifier(astPath.node.init.callee, { name: 'useState' })
      ) {
        const [val, setter] = astPath.node.id.elements;
        if (t.isIdentifier(val) && t.isIdentifier(setter) && val.name.length <= 2) {
          // Keep clean or rename state
          const newName = 'itemState';
          const newSetter = 'setItemState';
          astPath.scope.rename(val.name, newName);
          astPath.scope.rename(setter.name, newSetter);
        }
      }
    }
  });

  // Apply explicit renames if provided
  if (Object.keys(renames).length > 0) {
    traverse(ast, {
      Identifier(astPath: any) {
        if (renames[astPath.node.name] && astPath.scope.hasBinding(astPath.node.name)) {
          astPath.scope.rename(astPath.node.name, renames[astPath.node.name]);
        }
      }
    });
  }

  const result = generate(ast, { retainLines: false });
  return result.code;
}

/**
 * Formats a prompt for an LLM (Gemini, Claude, OpenAI, Ollama)
 * to provide intelligent rename mappings for an obfuscated code block.
 */
export function buildAiRenamePrompt(obfuscatedSnippet: string): string {
  return `You are DeepDecompile, an expert reverse engineering and decompiler system.
Analyze this obfuscated JavaScript/TypeScript code snippet. Identify all minified single-letter identifiers, functions, and components.
Return a STRICT JSON dictionary mapping old minified names to clean, production-grade, readable semantic names.

Example output format:
{
  "renames": {
    "a": "userAuthContext",
    "b": "fetchPaymentStatus",
    "e": "event",
    "r": "apiResponse"
  },
  "inferredComponent": "UserProfileModal",
  "inferredLibraries": ["react", "lucide-react", "axios"]
}

Source code:
\`\`\`javascript
${obfuscatedSnippet.slice(0, 3000)}
\`\`\`
`;
}
