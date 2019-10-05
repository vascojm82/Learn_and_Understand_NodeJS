function Person(firstname, lastname){

    this.firstname = firstname;
    this.lastname = lastname;

}

Person.prototype.greet = function(){        //The value of this is completely irrelevant to __proto__. It is set exactly to the object before the dot 
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}

var john = new Person('John','Doe');
//console.log(john.firstname);
john.greet();

var jane = new Person('Jane','Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);