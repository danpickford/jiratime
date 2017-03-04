'use strict';

const program = require('commander');
const PACKAGE = require('../package');
const chalk = require('chalk');

let jira_number = 0;
program
    .description(PACKAGE.jiratimeCommands.start)
    .arguments('<jira_number>')
    .action(function(__jira_number) {
		jira_number = __jira_number;
		console.log(chalk.green('Starting timer for Jira ' + chalk.red.underline.bold(jira_number) + '.'));
    })
  	.parse(process.argv);

