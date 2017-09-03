var fs = require('fs');

var readStream = fs.createReadStream('read-stream.txt');
var writeStream = fs.createWriteStream('write-stream.txt');

readStream.pipe(writeStream);