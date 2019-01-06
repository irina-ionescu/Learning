//function expression is wrapped in (); the extra()at the end mean you immediately invoke the function
//=>immediately invoked function expression
(function () {
    var firstName = 'John';
    console.log (firstName);
} () );
var firstName = 'Jane';
//variable firstName with the same name but outside the iife
console.log (firstName);
//what happens in the iife, stays in the iife :)
//giving the function a parameter lastName
(function (lastName) {
    var firstName = 'John';
    console.log (firstName);
    console.log (lastName);
    
} ('Doe') );