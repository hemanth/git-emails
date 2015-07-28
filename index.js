'use strict';
var exec = require('child_process').exec
module.exports = function (/*path*/ cb) {
	//path = path || '.'; later on
	if(!cb) throw new Error("callback missing");
	exec('git log --pretty="%ae"', function (error, emails, stderr) {
		if(!error || !stderr) return cb(null,emails.split('\n')
			.filter(function (e) {
					return e
			})
			.reduce(function (prev, cur) {
				return (prev.indexOf(cur) < 0) ? prev.concat([cur]) : prev;
			}, []));
		if(error) return cb(error,null);
		if(stderr) throw new Error(stderr);
	});
};
