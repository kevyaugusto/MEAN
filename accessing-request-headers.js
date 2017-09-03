var http = require('http');

http.createServer(function(req, res) {

	var reqHeaders = req.headers;

	var cookie = reqHeaders.cookie;
	var userAgent = reqHeaders['user-agent'];

	var responseHeader = {'Set-Cookie': 'myCookie=kevy'};
	res.writeHead(200, responseHeader);
	
	var responseString = 'Cookie: ' + cookie + '. User-Agent: ' + userAgent;
	res.end(responseString);

}).listen(1337);