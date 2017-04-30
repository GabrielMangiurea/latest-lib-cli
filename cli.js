#!/usr/bin/env node

'use strict';

const chalk = require('chalk');
const yargs = require('yargs');
const latestLib = require('latest-lib');
const loadingIndicator = require('loading-indicator');
const indicatorPresets = require('loading-indicator/presets');

const packageJSON = require('./package.json');

const util = {
	consoleLog: (...args) => {
		// Prefix every console.log message with the package name
		console.log(
			chalk.bgBlack(`${packageJSON.name}`),
			...args
		);
	}
};

yargs // eslint-disable-line no-unused-expressions
	.command({
		command: ['library', '*'],
		desc: false,
		handler: argv => {
			const timer = loadingIndicator.start(`Searching for '${argv._[0]}'...`, {
				frames: indicatorPresets.dots
			});

			latestLib(argv._[0], {only: argv.only})
			.then(library => {
				loadingIndicator.stop(timer);

				util.consoleLog(chalk.bold.blue('Library name: ') + library.name);
				util.consoleLog(chalk.bold.blue('Library version: ') + library.version);
				util.consoleLog(chalk.bold.blue('Library files:'));

				if (library.files.length > 0) {
					for (const idx in library.files) {
						if (library.files[idx]) {
							util.consoleLog(
								chalk.yellow(`${~~idx + 1}:`),
								library.files[idx]
							);
						}
					}
				} else {
					util.consoleLog('There are no files for this library');
				}
			}).catch(err => {
				loadingIndicator.stop(timer);

				util.consoleLog(
					chalk.bgRed('ERR'),
					err.message
				);
			});
		}
	})
	.option('only', {
		alias: 'o',
		describe: 'Return only the CSS/JavaScript files of the library in the response',
		type: 'string'
	})
	.usage('Usage: \x0A\u00A0\u00A0$ latest-lib <name> [--only <css/js>]')
	.example('$ latest-lib jquery')
	.example('$ latest-lib jquery@2')
	.example('$ latest-lib bootstrap --only css')
	.example('$ latest-lib bootstrap --only js')
	.help('help', 'Show this screen')
	.epilog('MIT \u00A9 Gabriel Mangiurea')
	.version(packageJSON.version)
	.argv;
