var http = require('http');

http.createServer(function(req, res) {
	if (req.url === '/' && req.method === 'GET') {
		var responseHeader = {'Content-Type': 'text/html'};
		res.writeHead(200, responseHeader);
		res.end('Hello <strong>home page</strong>');
	}
	else if(req.url === '/account' && req.method === 'GET') {
		var responseHeader = {'Content-Type': 'text/html'};
		res.writeHead(200, responseHeader);
		res.end('Hello <strong>account page</strong>');
	}
	else {
		res.writeHead(404, responseHeader);
		res.end();
	}
}).listen(1337);