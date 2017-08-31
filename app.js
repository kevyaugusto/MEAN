var http = require('http');
var fileSystem = require('fs');

http.createServer(function(req,res) {

	if (req.url === '/favicon.ico') {
		return res.end();
	}

	console.log('Incoming request to ' + req.url);

	var i = 2;
	var timeoutMs = 5000;
	
	console.log('File name: ' + __filename); //__filename = app.js

	setTimeout(function() {
		fileSystem.readFile(__filename, {encoding: 'utf8'}, function(error, contents) {
			if (error) {
				console.log(error);
				return res.end();
			}

			console.log('Sending response for ' + req.url);
			res.end(contents);
		});
	}, timeoutMs);

	while(i--){
		console.log('Loop value: ' + i + '\r');
	}

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337');
