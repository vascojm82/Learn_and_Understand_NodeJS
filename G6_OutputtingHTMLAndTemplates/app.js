var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');  //Because of 'utf8' a string will be returned otherwise the var html will just be a binary data stream
    var message = 'Hello World !';
    html = html.replace('{Message}', message);
    res.end(html);
    
}).listen(1337, '127.0.0.1');