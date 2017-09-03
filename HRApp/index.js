var http = require('http');
var employeeService = require('./lib/employees');
var responder = require('./lib/responseGenerator');

var staticFile = responder.staticFile('/public');
var serverAddress = '127.0.0.1';
var serverPort = 1337;

http.createServer(function(req, res) {
	
	req.method = req.method.toUpperCase();

	if (req.method != 'GET') {
		res.writeHead(501, {'Content-Type': 'text/plain'});
		return res.end(req.method + ' is not implemented by this server.');
	}
	
	var _url;

	if (_url = /^\/employees$/i.exec(req.url)) {
		employeeService.getEmployees(function(error, data) {
			if (error) {
				//send a 500 error
				return responder.send500(error, res);
			}
			return responder.sendJSON(data, res);
		});
	}
	else if (_url = /^\/employees\/(\d+)$/i.exec(req.url)) {
		//find the employee by the id in the route
		var employeeId = _url[1];
		employeeService.getEmployee(employeeId, function(error, data) {
			if (error) {
				return responder.send500(error, res);
			}
			if (!data) {
				return responder.send404(error, res);
			}
			return responder.sendJSON(data, res);
		});		
		
	}
	else {
		staticFile(req.url, res);		
	}

	console.log(req.method + ' ' + req.url);	

}).listen(serverPort, serverAddress);

console.log('Server running at ' + serverAddress + ':' + serverPort);
