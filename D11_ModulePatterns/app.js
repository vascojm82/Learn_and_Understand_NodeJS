var greet = require('./greet1');
greet();

var greet2 = require('./greet2');
greet2.greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');       //require saves the reference to the new object it returns then that reference is assigned to variable
greet3.greet();                             //   Hello World!!
greet3.greeting = 'Changed helo world!';    //referenced object changed

var greet3b = require('./greet3');      //require returns the reference to the same object that has already been created
greet3b.greet();                        //    Changed hello world!

var greet4 = require('./greet4');
var grtr = new greet4();
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();
