var fs = require('fs');
var data = 'First written file';
var fileName = 'foo.txt';

//flag obj: overwrite file, append file, etc etc, check documentation fs
var flag = {flag: 'wx' /*this flag causes an error if the file exists*/}; 

//flag default write file is create or overwrite
fs.writeFile(__dirname + '/' + fileName, data, flag, function(error){
	if (error) {
		return console.log(error.message);
	};
});

//fs.writeFileSync - another possibility