import parser from '@babel/parser';
import traversePkg from '@babel/traverse';
import generatorPkg from '@babel/generator';
import * as t from '@babel/types';

const traverse = (traversePkg as any).default || traversePkg;
const generate = (generatorPkg as any).default || generatorPkg;

/**
 * JSX Re-Synthesizer:
 * Compilers like Babel/SWC turn clean JSX:
 *   <button className="btn" onClick={fn}>Click</button>
 * into runtime function calls:
 *   _jsx("button", { className: "btn", onClick: fn, children: "Click" })
 * OR
 *   React.createElement("button", { className: "btn" }, "Click")
 *
 * This pass reconstructs the raw function calls back into gorgeous, natural JSX AST!
 */
export function reconstructJSX(code: string): string {
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

  traverse(ast, {
    CallExpression(astPath: any) {
      const callee = astPath.node.callee;
      let isJsxCall = false;

      // Detect: _jsx, _jsxs, jsx, jsxs, React.createElement
      if (t.isIdentifier(callee) && ['_jsx', '_jsxs', 'jsx', 'jsxs'].includes(callee.name)) {
        isJsxCall = true;
      } else if (
        t.isMemberExpression(callee) &&
        t.isIdentifier(callee.object, { name: 'React' }) &&
        t.isIdentifier(callee.property, { name: 'createElement' })
      ) {
        isJsxCall = true;
      }

      if (isJsxCall && astPath.node.arguments.length >= 1) {
        const tagArg = astPath.node.arguments[0];
        const propsArg = astPath.node.arguments[1];

        let tagName = 'div';
        if (t.isStringLiteral(tagArg)) {
          tagName = tagArg.value;
        } else if (t.isIdentifier(tagArg)) {
          tagName = tagArg.name;
        }

        const jsxIdentifier = t.jsxIdentifier(tagName);
        const jsxAttributes: any[] = [];
        let children: any[] = [];

        if (t.isObjectExpression(propsArg)) {
          for (const prop of propsArg.properties) {
            if (t.isObjectProperty(prop) && t.isIdentifier(prop.key)) {
              const propName = prop.key.name;

              // Handle children
              if (propName === 'children') {
                if (t.isStringLiteral(prop.value)) {
                  children.push(t.jsxText(prop.value.value));
                } else if (t.isArrayExpression(prop.value)) {
                  // Multiple children
                  for (const childEl of prop.value.elements) {
                    if (t.isStringLiteral(childEl)) {
                      children.push(t.jsxText(childEl.value));
                    } else if (childEl) {
                      children.push(t.jsxExpressionContainer(childEl as any));
                    }
                  }
                } else {
                  children.push(t.jsxExpressionContainer(prop.value as any));
                }
              } else {
                // Regular JSX attribute
                let attrValue: any;
                if (t.isStringLiteral(prop.value)) {
                  attrValue = prop.value;
                } else {
                  attrValue = t.jsxExpressionContainer(prop.value as any);
                }
                jsxAttributes.push(t.jsxAttribute(t.jsxIdentifier(propName), attrValue));
              }
            }
          }
        }

        const isSelfClosing = children.length === 0;
        const openingElement = t.jsxOpeningElement(jsxIdentifier, jsxAttributes, isSelfClosing);
        const closingElement = isSelfClosing ? null : t.jsxClosingElement(jsxIdentifier);

        const jsxElement = t.jsxElement(openingElement, closingElement, children, isSelfClosing);
        astPath.replaceWith(jsxElement);
      }
    }
  });

  const output = generate(ast, { retainLines: false, jsescOption: { minimal: true } });
  return output.code;
}
