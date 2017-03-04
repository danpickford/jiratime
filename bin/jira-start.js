'use strict';

const program = require('commander');
const PACKAGE = require('../package');
const chalk = require('chalk');
const Regex = require("regex");
const Jiratime = require('../lib/jiratime');
const jiratime = global.jiratime = new Jiratime();

let jira_number = 0;
program
    .description(PACKAGE.jiratimeCommands.start)
    .arguments('<jira_number>')
    .action(function(__jira_number) {
		jira_number = __jira_number;
		console.log(chalk.green('Starting timer for Jira ' + chalk.red.underline.bold(jira_number) + '.'));
    })
  	.parse(process.argv);

//let regex = new Regex(/(?:\s|^)([A-Z]+-[0-9]+)(?=\s|$)/g);
let regex = /(?:\s|^)([A-Z]+-[0-9]+)(?=\s|$)/g;
//if (!regex.test(jira_number)){
if (!jira_number.match(regex)){
	jiratime.criticalError('The Jira number is not valid ' + chalk.underline.bold(jira_number) + '.');
}

jiratime.startTimer(jira_number);