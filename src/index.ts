#!/usr/bin/env node
import { Command } from 'commander';
import { snapshotCommand } from './commands/snapshot';
import { crankSwitchBoardFeedCommand } from './commands/crank-switchboard-feed';

const program = new Command();

program
  .name('fragmetric-snapshot')
  .description('CLI to take defi snapshot or crank crank-switchboard-feed feeds')
  .version(require('../package.json').version as string);

program.addCommand(snapshotCommand);
program.addCommand(crankSwitchBoardFeedCommand);

program.parse(process.argv);
