var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();   //Creates gzip stream which is duplex (read/write)

readable.pipe(writable);        //pipe readable stream to writable stream, only read - > write can be piped
              //gzip stream returns compressed chunk
readable.pipe(gzip).pipe(compressed);
                         //since gzip is also readable (duplex) it can pipe to another writable stream

