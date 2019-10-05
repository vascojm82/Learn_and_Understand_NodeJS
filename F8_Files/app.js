var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);
                                                    //If the character encoding type 'utf8' is omitted, it will //return a buffer with binary data instead
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data){
    console.log(data);
});

console.log('Done');