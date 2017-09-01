var fileStream = require('fs');

var resolveRejectPromise = function(resolve,reject) {

	fileStream.readFile('event-listener.js', 'utf8', function(error, data) {
		if (error) {
			return reject(error);
		}

		resolve(data);

	});
};

var successCallback = function(result){
	console.log(result);
	return result;
};

var errorCallback =  function(error) {
	console.log(error.message);
};

var successCallbackChained = function (result) {
	console.log(result + ' - THE END!!');
};

var catchCallback = function(error) {
	console.log(error.message);
};

var promise = new Promise(resolveRejectPromise);
promise
	.then(successCallback, errorCallback)
	.then(successCallbackChained) //CHAINING PROMISE!!!
	.catch(catchCallback);

