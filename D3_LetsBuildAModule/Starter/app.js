require ('./greet.js');

// ./ means it is found in the same directory as current file
//require is a function that calls a module (independent block of code that does not impact other code accidentally)
greet();
// trying to call greet() as a function/module in app.js doesn't work because the module is not defined, it is independent
//and app does not have access to it unless explicitly granted 
//can create variables of the same name in a module and an app and they will not collide with each other
//how to make the function greet from the module available to app: module.exports = greet; see greet module
//then declare a variable that has the value of the function
var greet = require ('./greet.js')
greet();
