var obj = {
    name: 'John Doe',
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();
obj.greet.call({name: 'Jane Doe'}); //Changes the context of 'this' on a function call from 'obj' to the object being passed as the parameter
obj.greet.apply({name: 'Jane Doe'});