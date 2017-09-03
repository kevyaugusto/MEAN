//Encapsulate the response logic in this file
var fileSystem = require('fs');

exports.send404 = send404;
exports.send500 = send500;
exports.sendJSON = sendJSON;
exports.staticFile = staticFile;

function send404 (response) {
	console.error('Resource not found');
	response.writeHead(404, {'Content-Type': 'text/plain'});
	response.end('Not Found');
}

function send500 (data, response) {
	console.error(data.red);
	response.writeHead(500, {'Content-Type': 'text/plain'});
	response.end(data);
}

function sendJSON (data, response) {
	response.writeHead(200, {'Content-Type': 'application/json'})
	response.end(JSON.stringify(data));
}

function staticFile (staticPath) {
	return function(data, response) {
		var readStream;
		
		data = data.replace(/^(\/home)(.html)?$/i, '$1.html');
		data = '.' + staticPath + data;
		fileSystem.stat(data, function(error, stats) {
			if (error || stats.isDirectory()) {
				return exports.send404(response);
			}

			readStream = fileSystem.createReadStream(data);
			return readStream.pipe(response);
		});
	}
}