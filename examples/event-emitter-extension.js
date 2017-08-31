var EventEmitter = require("events").EventEmitter;
var util = require("util"); //lib from nodejs

function Counter () {
	var self = this;
	
	EventEmitter.call(this); //call EventEmitter constructor
	
	var count = 0;

	this.start = function () {
		this.emit("start");

		setInterval(function() {

			self.emit("count", count);
			++count;

		}, 1000);
	};
}

util.inherits(Counter, EventEmitter); //setup inheritance

var counter = new Counter(); //instantiating a Counter event emitter