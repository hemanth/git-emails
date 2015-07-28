'use strict';
var assert = require('assert');
var gitEmails = require('./');

it('should return a list of emails', function (done) {
	// Need to find a better way to mock, current in the project repo.
	gitEmails( function (err,data) {
		assert.strictEqual(!err,true);
		done();
	});
});
