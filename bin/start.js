'use strict';

const program = require('commander');
const PACKAGE = require('../package');

program
    .description(PACKAGE.jiratimeCommands.start)
    .parse(process.argv);

