#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import path from 'path';
import { DecompilerEngine } from './engine.js';
import { startStudioServer } from './studio/server.js';

const program = new Command();

console.log(chalk.bold.cyan(`
  ██████╗ ███████╗███████╗██████╗ 
  ██╔══██╗██╔════╝██╔════╝██╔══██╗
  ██║  ██║█████╗  █████╗  ██████╔╝
  ██║  ██║██╔══╝  ██╔══╝  ██╔═══╝ 
  ██████╔╝███████╗███████╗██║     
  ╚═════╝ ╚══════╝╚══════╝╚═╝     
  ██████╗ ███████╗ ██████╗ ██████╗ ███╗   ███╗██████╗ ██╗██╗     ███████╗
  ██╔══██╗██╔════╝██╔════╝██╔═══██╗████╗ ████║██╔══██╗██║██║     ██╔════╝
  ██║  ██║█████╗  ██║     ██║   ██║██╔████╔██║██████╔╝██║██║     █████╗  
  ██║  ██║██╔══╝  ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║██║     ██╔══╝  
  ██████╔╝███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║███████╗███████╗
  ╚═════╝ ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝
`));
console.log(chalk.dim('  Neural Reverse-Engineering & AST Decompiler for Modern Web Bundles\n'));

program
  .name('deep-decompile')
  .description('Decompile minified JS, production web bundles, or URLs into clean TypeScript/React repositories')
  .version('1.0.0')
  .argument('[input]', 'URL or local file path to the bundle/script')
  .option('-o, --out <dir>', 'Output destination directory', './decompiled_output')
  .option('--ui', 'Launch the visual Cyberpunk DeepDecompile Web Studio')
  .option('-p, --port <port>', 'Port for the Studio server', '4242')
  .option('--no-sourcemap', 'Skip sourcemap discovery')
  .option('--ai', 'Enable AI semantic renaming (requires GEMINI_API_KEY)')
  .action(async (input: string | undefined, options: any) => {
    // If --ui flag passed, or no arguments provided, launch the visual Studio!
    if (options.ui || !input) {
      console.log(chalk.green.bold('✨ Launching DeepDecompile Visual Web Studio...'));
      startStudioServer(parseInt(options.port, 10));
      return;
    }

    const spinner = ora({
      text: chalk.yellow(`Fetching and analyzing input: ${input}`),
      color: 'cyan'
    }).start();

    try {
      const engine = new DecompilerEngine({
        input,
        outputDir: options.out,
        extractSourceMaps: options.sourcemap,
        useAi: options.ai
      });

      spinner.text = chalk.cyan('Unpacking bundle modules and reconstructing AST...');
      const result = await engine.run();

      spinner.succeed(chalk.green.bold(`Successfully decompiled in ${result.durationMs}ms!`));

      console.log('\n' + chalk.bold('Summary:'));
      console.log(`  ${chalk.cyan('Source:')} ${result.sourceUrlOrPath}`);
      console.log(`  ${chalk.cyan('Output Dir:')} ${result.outputDirectory}`);
      console.log(`  ${chalk.cyan('SourceMap Found:')} ${result.sourceMapFound ? chalk.green('YES (Full fidelity recovered)') : chalk.yellow('NO (Reconstructed via AST De-obfuscation)')}`);
      console.log(`  ${chalk.cyan('Modules Recovered:')} ${chalk.bold(result.totalModulesExtracted)}`);

      console.log('\n' + chalk.bold.green('Next steps to run the recovered code:'));
      console.log(`  cd ${options.out}`);
      console.log('  npm install');
      console.log('  npm run dev\n');
    } catch (err: any) {
      spinner.fail(chalk.red.bold(`Decompilation failed: ${err.message}`));
      process.exit(1);
    }
  });

program.parse(process.argv);
