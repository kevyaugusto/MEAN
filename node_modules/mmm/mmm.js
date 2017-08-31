/*
IMPORTANT NOTE!
When you run node myfile.js or require('somefile.js') the code in your file is wrapped as follow:
	(function (exports, require, module, __filename, __dirname) {
	     // your code is here
	});
*/
exports.add = add;
exports.multiply = multiply;
exports.factorial = factorial;
exports.now = Date.now();	

function add (number1, number2) {
	return parseInt(number1, 10) + parseInt(number2, 10);
}

function multiply (number1, number2) {
	return parseInt(number1, 10) * parseInt(number2, 10);
}

function factorial (number) {
	if (number === 0) {
		return 1;
	}
	return number * factorial(number - 1);
}

function privateMethod (argument) {
	console.log('This method is not exposed in exports');
}