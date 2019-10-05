var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/peopleDb', function(){
	console.log('Mongoose is Connected');
});

var Schema = mongoose.Schema;

var personSchema = new Schema({
	firstName: String,
	lastName: String,
	address: String
})

// compiling our schema into a Model, A model is a class with which we construct documents
var Person = mongoose.model('Person', personSchema);

var john = Person({
	firstName: 'Johnny',
	lastName: 'Bravo',
	address:'555 Main St'
});

//save the user
john.save(function(err){
	if(err)
		throw err;
	
	console.log('Person Saved!');
});

var jenna = Person({
	firstName: 'Jenna',
	lastName: 'Jameson',
	address:'555 Main St'
});

//save the user
jenna.save(function(err){
	if(err)
		throw err;
	
	console.log('Person Saved!');
});

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

	//get all the users,  {} means everything
	Person.find({}, function(err, users){
		if(err)
			throw err;
		
		//object of all the users
		console.log(users);
	
	});

	next();
});

htmlController(app);

apiController(app);

app.listen(port);