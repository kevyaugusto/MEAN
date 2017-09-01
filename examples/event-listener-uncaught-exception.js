var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

//process is the global process object provided by Node used to interact with the currently running process
process.on('uncaughtException', function(error) {
	console.log(error.message);
	process.exit(-1);
});

emitter.emit('error', new Error('Uncaught exception. Fatal error on process.'));
