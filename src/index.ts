#!/usr/bin/env node
import { Command } from 'commander';
import { snapshotCommand } from './commands/snapshot';

const program = new Command();

program
  .name('fragmetric-snapshot')
  .description('CLI to take arbitrary onchain snapshots for Fragmetric platform')
  .version(require('../package.json').version as string);

program.addCommand(snapshotCommand);

program.parse(process.argv);
