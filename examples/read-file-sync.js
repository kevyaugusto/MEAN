var fs = require('fs');

var data;

try {
	data = fs.readFileSync(__filename);	
	console.log('Buffer representation');
	console.log(data);
	console.log('Content representation:');
	console.log(data.toString());

	data = fs.readFileSync(__filename, {encoding: 'utf8'});
	console.log('Content representation 2:');
	console.log(data);

}
catch (error) {
	console.error(error.message);	
}