var http = require('http');

http.createServer(function(req, res){

    //Writing HTTP response
    res.writeHead(200, { 'Content-Type': 'text/plain' });   //response header
    res.end('Hello world\n');                               //response body

}).listen(1337, '127.0.0.1');