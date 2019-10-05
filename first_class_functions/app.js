// function statement
function greet(){
    console.log('hi');
}
greet();

//functions are first-class
function logGreeting(fn){
    fn();
}
logGreeting(greet);     //Functions are objects in JavaScript and can be passed just like any other type of variables

//function expression
var greetMe = function(){
    console.log('Hi Tony');
}

greetMe();

//It's first-class
logGreeting(greetMe);

//use a function expression on the fly
logGreeting(function(){
    console.log('Hello Tony');
});

