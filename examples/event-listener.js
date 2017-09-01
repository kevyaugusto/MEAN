var EventEmitter = require("events").EventEmitter;
var util = require("util"); //lib from nodejs

function Counter () {
	var self = this;

	EventEmitter.call(self); //call EventEmitter constructor
	
	var count = 0;

	self.start = function () {
		this.emit("start");

		setInterval(function() {

			self.emit("count", count);
			++count;

		}, 1000);
	};
}

util.inherits(Counter, EventEmitter); //setup inheritance

var counter = new Counter(); //instantiating a Counter event emitter

//listener for the event start. When Counter call emit('start'), the event below is executed
counter.on('start', function() {
	console.log('start event');
});

counter.on('count', function(count) {
	console.log('count = ' + count);
});

counter.start();

