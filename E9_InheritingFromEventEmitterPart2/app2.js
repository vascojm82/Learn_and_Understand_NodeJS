var util = require('util');

function Person(){
    this.firstname = 'John';
    this.lastname = 'Doe';
}

Person.prototype.greet = function(){
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman(){
    Person.call(this);              //Kinda like a super constructor, it changes the context of 'this' from a Person object to the new Policeman object being created below
    this.badgenumber = '1234';      //thus adding firstname & lastname to the policeman object and thus achieving 'FULL' inheritance
}

util.inherits(Policeman, Person);   //Connects the prototypes of the two objects
var officer = new Policeman();
officer.greet();