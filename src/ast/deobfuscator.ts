import parser from '@babel/parser';
import traversePkg from '@babel/traverse';
import generatorPkg from '@babel/generator';
import * as t from '@babel/types';
import prettier from 'prettier';

// Handle ESM/CJS interop for babel packages
const traverse = (traversePkg as any).default || traversePkg;
const generate = (generatorPkg as any).default || generatorPkg;

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
export async function deobfuscateAST(minifiedCode: string): Promise<string> {
  let ast: any;
  try {
    ast = parser.parse(minifiedCode, {
      sourceType: 'unambiguous',
      plugins: ['jsx', 'typescript'],
      errorRecovery: true
    });
  } catch (err) {
    // If syntax parsing fails (e.g. partial snippet), return raw code
    return minifiedCode;
  }

  traverse(ast, {
    // 1. Transform unary expressions: !0 -> true, !1 -> false, void 0 -> undefined
    UnaryExpression(path: any) {
      if (path.node.operator === '!' && t.isNumericLiteral(path.node.argument)) {
        if (path.node.argument.value === 0) {
          path.replaceWith(t.booleanLiteral(true));
        } else {
          path.replaceWith(t.booleanLiteral(false));
        }
      } else if (path.node.operator === 'void' && t.isNumericLiteral(path.node.argument, { value: 0 })) {
        path.replaceWith(t.identifier('undefined'));
      }
    },

    // 2. Un-inline comma sequence expressions: (x = 1, y = 2, z = 3) into separate statements when in ExpressionStatement
    ExpressionStatement(path: any) {
      if (t.isSequenceExpression(path.node.expression)) {
        const expressions = path.node.expression.expressions;
        const statements = expressions.map((expr: any) => t.expressionStatement(expr));
        path.replaceWithMultiple(statements);
      }
    },

    // 3. Convert top-level ternary ExpressionStatements into clean IfStatements:
    // `condition ? doA() : doB()` => `if (condition) { doA(); } else { doB(); }`
    ConditionalExpression(path: any) {
      if (t.isExpressionStatement(path.parent)) {
        const test = path.node.test;
        const consequent = t.expressionStatement(path.node.consequent);
        const alternate = t.expressionStatement(path.node.alternate);
        path.parentPath.replaceWith(t.ifStatement(test, t.blockStatement([consequent]), t.blockStatement([alternate])));
      }
    },

    // 4. Simplify computed member access: obj["userName"] -> obj.userName
    MemberExpression(path: any) {
      if (path.node.computed && t.isStringLiteral(path.node.property)) {
        const propName = path.node.property.value;
        // Verify valid JS identifier
        if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(propName)) {
          path.node.computed = false;
          path.node.property = t.identifier(propName);
        }
      }
    }
  });

  const output = generate(ast, {
    retainLines: false,
    compact: false,
    concise: false,
    comments: true
  });

  try {
    const formatted = await prettier.format(output.code, {
      parser: 'babel-ts',
      singleQuote: true,
      trailingComma: 'none',
      semi: true,
      printWidth: 100
    });
    return formatted;
  } catch (err) {
    return output.code;
  }
}
