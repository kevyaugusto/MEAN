var fs = require('fs');

var stream = fs.createReadStream('read-stream.txt');

stream.on('data', function(data) {
	var chunk = data.toString();
	process.stdout.write(chunk);
});

stream.on('end', function() {
	console.log('\n\nMethod END was called. End!');
});

stream.on('error', function(error) {
	console.log('Method ERROR was called!');
	console.log(error.message);
});