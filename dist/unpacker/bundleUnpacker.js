import parser from '@babel/parser';
import traversePkg from '@babel/traverse';
import generatorPkg from '@babel/generator';
import * as t from '@babel/types';
import path from 'path';
const traverse = traversePkg.default || traversePkg;
const generate = generatorPkg.default || generatorPkg;
/**
 * Webpack & Vite Bundle Unpacker:
 * Webpack packages client-side apps into modules passed to a runtime registry:
 * e.g., (self.webpackChunk = self.webpackChunk || []).push([ [chunkId], { moduleId: function(e, t, r) { ... } } ])
 * Or Vite dynamic imports / ES module chunk arrays.
 *
 * This unpacker extracts every single sub-module from the bundle into an isolated file!
 */
export function unpackBundleModules(bundleCode, outputDir) {
    const modules = [];
    let ast;
    try {
        ast = parser.parse(bundleCode, {
            sourceType: 'unambiguous',
            plugins: ['jsx', 'typescript'],
            errorRecovery: true
        });
    }
    catch (err) {
        return [
            {
                id: 'bundle_main',
                filePath: path.join(outputDir, 'decompiled_src', 'main.js'),
                code: bundleCode
            }
        ];
    }
    // Detect Webpack chunks
    traverse(ast, {
        CallExpression(astPath) {
            const callee = astPath.node.callee;
            // Match: .push([[chunkId], { moduleMap }])
            if (t.isMemberExpression(callee) &&
                t.isIdentifier(callee.property, { name: 'push' }) &&
                astPath.node.arguments.length === 1 &&
                t.isArrayExpression(astPath.node.arguments[0])) {
                const chunkArray = astPath.node.arguments[0].elements;
                if (chunkArray.length >= 2 && t.isObjectExpression(chunkArray[1])) {
                    const moduleObject = chunkArray[1];
                    for (const prop of moduleObject.properties) {
                        if (t.isObjectProperty(prop)) {
                            let modId = 'module';
                            if (t.isNumericLiteral(prop.key) || t.isStringLiteral(prop.key)) {
                                modId = String(prop.key.value);
                            }
                            else if (t.isIdentifier(prop.key)) {
                                modId = prop.key.name;
                            }
                            // Extract function body of the module
                            let modCode = '';
                            if (t.isFunctionExpression(prop.value) ||
                                t.isArrowFunctionExpression(prop.value)) {
                                const generated = generate(prop.value.body, { retainLines: false });
                                modCode = generated.code;
                            }
                            else {
                                const generated = generate(prop.value, { retainLines: false });
                                modCode = generated.code;
                            }
                            // Heuristic: Check if module looks like a React component
                            const isComponent = /React|createElement|jsx|_jsx|useState|useEffect/.test(modCode);
                            const fileName = isComponent ? `Component_${modId}.tsx` : `module_${modId}.ts`;
                            modules.push({
                                id: modId,
                                filePath: path.join(outputDir, 'decompiled_src', isComponent ? 'components' : 'lib', fileName),
                                code: modCode,
                                isComponent
                            });
                        }
                    }
                }
            }
        }
    });
    // If no webpack chunk array was matched, treat the whole file as a root module
    if (modules.length === 0) {
        modules.push({
            id: 'root',
            filePath: path.join(outputDir, 'decompiled_src', 'App.tsx'),
            code: bundleCode,
            isComponent: /React|createElement|jsx|_jsx/.test(bundleCode)
        });
    }
    return modules;
}
