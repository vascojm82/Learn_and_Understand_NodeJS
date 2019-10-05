var express = require('express');   //returns express.js's createApplication function
var app = express();                //call to createApplication, returns a new function object with properties and methods attached to it.


var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/api', function(req, res){
    res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);

