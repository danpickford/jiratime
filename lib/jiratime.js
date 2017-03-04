const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');

module.exports = class Jiratime {
	constructor() {
		this.checkDirectory();
    }
	error(message) {
        console.log(chalk.red(message));
    }
	criticalError(message) {
		this.error(message);
        process.exit();
    }
    checkDirectory(){
    	var fs = require('fs');
		var dir = '/jiratime';

		if (!fs.existsSync(dir)){
		    fs.mkdirSync(dir);
		    console.log("Created directory");
		}
    }
    startTimer(jiranumber){
    	let datetime = moment().format();
    	let fancy_date_time = moment().format('MMMM Do YYYY, h:mm:ss a');
		fs.writeFile("/jiratime/jira_time_log", datetime + ',' + jiranumber + ',on', function(err) {
	    if(err) {
	        console.log("Error starting timer" + err);
	    }
		    console.log('Timer started ' + fancy_date_time);
		}); 
    }
	stopTimer(jiranumber){
    	let datetime = moment().format();
    	let fancy_date_time = moment().format('MMMM Do YYYY, h:mm:ss a');
		fs.writeFile("/jiratime/jira_time_log", datetime + ',' + jiranumber + ',off', function(err) {
	    if(err) {
	        console.log("Error stopping timer" + err);
	    }
		    console.log('Timer stopped ' + fancy_date_time);
		}); 
    }
}