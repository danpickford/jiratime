#!/usr/bin/env node

'use strict';

const PACKAGE = require('../package');
const program = require('commander').usage('<command> [options]');

Object.keys(PACKAGE.jiratimeCommands).forEach(
    key => program.command(key, PACKAGE.jiratimeCommands[key])
);

program.parse(process.argv);
if (!process.argv.slice(2).length || !PACKAGE.jiratimeCommands[process.argv[2]]) {
    program.help();
}