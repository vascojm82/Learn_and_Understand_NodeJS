function greet(callback){
    console.log('Hello');
    var data = {
        name: 'John Doe'
    };
    
    callback(data);
}

greet(function(data){
    console.log('The Callback was Invoked');
    console.log(data);
});

greet(function(data){
    console.log('A different Callback was invoked');
    console.log(data.name);
});