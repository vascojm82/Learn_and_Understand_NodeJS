exports = function(){       //exports originally points to the same object in memory as module.exports but since in JS
    console.log('Hello');   //when you set a variable equal to a value, it creates a new object, in this case the anonymous
}                           //function becomes a new object in memory and exports no longer points to the object pointed to 
                            //by module.exports.
                            //If we stored the anonymous function in module.exports instead, then both module.exports and 
                            //exports will point to the same function object.



console.log(exports);
console.log(module.exports);       //require will return the empty object pointed to by module.exports by default