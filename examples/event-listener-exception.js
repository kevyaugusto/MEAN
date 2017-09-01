var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('error', function(error) {
	//console.log(error);
	console.log(error.message);
});

emitter.emit('error',  new Error('msg1'));