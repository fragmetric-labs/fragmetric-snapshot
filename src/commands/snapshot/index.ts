import '../../require';
import { Command } from 'commander';
import { logger } from '../../logger';
import { createSourceStream } from './source';
import { createOutputStream } from './output';

export type ProgramOptions = {
  rpc: string;
  output: string;
  source: string;
  sourceArgs: string[];
};

export const snapshotCommand = new Command()
  .name('snapshot')
  .description('CLI to take arbitrary onchain snapshots for Fragmetric platform')
  .option('-s, --silent', 'Turn off stdout logging')
  .option('-r, --rpc <url>', 'Solana RPC URL')
  .option(
    '-o, --output <path>',
    'Output path: - (stdout), ./fragmetric-snapshot.json, /tmp/fragmetric-snapshot.sock',
  )
  .arguments('<args...>')
  .allowExcessArguments(true)
  .showHelpAfterError()
  .action(async (args: string[], rawOptions, cmd) => {
    const options: ProgramOptions = {
      rpc: rawOptions.rpc || 'https://api.mainnet-beta.solana.com',
      output: rawOptions.output || '-',
      source: args[0] || '',
      sourceArgs: args.slice(1),
    };
    logger.level = !!rawOptions.silent ? 'error' : 'debug';

    logger.info('creating a snapshot stream', { options, version: cmd.parent?.version() });
    Promise.all([
      createOutputStream({
        path: options.output,
      }),
      createSourceStream({
        rpc: options.rpc,
        source: options.source as any,
        args: options.sourceArgs,
      }),
    ])
      .then(([outputStream, sourceStream]) => {
        sourceStream.on('error', (error: any) => {
          logger.error('exception occurred from source stream', { error });
          setTimeout(() => process.exit(1), 1000);
        });
        sourceStream.on('close', () => {
          logger.info('source stream closed');
        });
        outputStream.on('error', (error: any) => {
          logger.error('exception occurred from output stream', { error });
          setTimeout(() => process.exit(1), 1000);
        });
        outputStream.on('close', () => {
          logger.info('output stream closed');
        });

        sourceStream.pipe(outputStream);
      })
      .catch((error) => {
        logger.error('exception occurred while initializing source/output streams', { error });
        setTimeout(() => process.exit(1), 1000);
      });
  });
