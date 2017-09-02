var fs = require('fs');

fs.readFile(__filename, 'utf8', function(error, data){
	if (error) {
		return console.log('error: ' + error.message);
	}
	console.log('File content');
	console.log(data);
});

//===================================================================

//read file without encoding
fs.readFile(__filename, function(error, data){
	if (error) {
		return console.log('error: ' + error.message);
	}
	console.log('File in a Buffer (Node data type used to store raw binary data)');
	console.log(data);
});