//To execute this file: node filename.js foo bar

process.argv.forEach(function(value, index, args) {
	console.log('process.argv[' + index + '] = ' + value);
});