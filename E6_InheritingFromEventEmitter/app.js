var EventEmitter = require('events');
var util = require('util');

function Greetr(){
    this.greeting = 'Hello World!';
}

util.inherits(Greetr, EventEmitter);    //Greetr inherits all properties and methods from EventEmitter that are in its prototype obj

Greetr.prototype.greet = function(data){
    console.log(this.greeting + ':' + data);
    this.emit('greet', data);
} 

var greeter1 = new Greetr();

greeter1.on('greet', function(data){
    console.log('Someone greeted!' + data);
});


greeter1.greet('Jose');