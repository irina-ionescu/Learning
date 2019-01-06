//very common in JS, revealing module pattern; only the greet function is made available, no access to the var greeting
var greeting = 'Hello world!!!!!'
function greet() {
    console.log(greeting);
}
module.exports = {
    greet : greet
}