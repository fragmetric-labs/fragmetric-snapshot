#!/usr/bin/env node
import {Command} from "commander";
import {snapshotCommand} from "./commands/snpashot";

const program = new Command();

program.name('fragmetric-snapshot')
  .description('CLI to take defi snapshot or crank oracle feeds')
  .version(require('../package.json').version as string)

program.addCommand(snapshotCommand)

program.parse(process.argv);
