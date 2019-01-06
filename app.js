var a=1;
var b=2;
var c=a+b;
console.log
console.log (c);
//Function statement
function greet(){
    console.log ('I am an alien from the planet Duplo, I am here to destroy you')
}
greet();
//functions are first class- are considered a special kind of object
function logGreeting (fn){
    fn();
}
logGreeting (greet);
//function expression
var greetMe = function() {
    console.log ('You are gonna have to waive');
}
greetMe();
//functions are first class
logGreeting(greetMe);

//use function expression on the fly
logGreeting(function() {
    console.log ('Hello!');
});

