exports.greet = function(){     //Mutate the object (Add a property or method) and it will work
    console.log('Hello');       //By changing the object(mutating it) the reference to module.exports won't be changed
}                               //the method greet will be added to the object pointed to by module.exports

console.log(exports);
console.log(module.exports);