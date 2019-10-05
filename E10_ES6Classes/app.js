'use strict';

class Person{
    constructor(firstname, lastname){   //Anything added inside the constructor gets added to each copy of the object
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet(){        //Any other methods added inside the class get added to the prototype
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
}


var john = new Person('John','Doe');
//console.log(john.firstname);
john.greet();

var jane = new Person('Jane','Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);