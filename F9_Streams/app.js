var fs = require('fs');
                                                               //convert to Str  //Size of the buffer
var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk) {
	console.log(chunk.length);
	writable.write(chunk);
});