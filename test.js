'use strict';

const execa = require('execa');
const test = require('ava');

test('failure: not specifying the name of the library', async t => {
	await execa.stdout('latest-lib', [''])
	.then(response => t.is(/Please specify the name of the library/.test(response), true));
});
