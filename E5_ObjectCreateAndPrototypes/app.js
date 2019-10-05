var person = {
    firstname: '',
    lastname: 'Schmoe',
    greet: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var john = Object.create(person);
john.firstname = 'John';
//john.lastname = 'Doe';
john.job = "Engineer"
john.greet = function(){
    return this.firstname + ' ' + this.lastname + ' ' + this.job;
}

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());
