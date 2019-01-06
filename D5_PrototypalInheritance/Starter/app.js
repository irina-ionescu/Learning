//function constructor
function Person (firstname,lastname) {
    this.firstName = firstname;
    this.lastName = lastname;
}
Person.prototype.greet = function () {
    console.log ( 'Hello ' + this.firstName + ' ' + this.lastName );
};
var john = new Person('John','Doe');
//console.log ( john.firstName );
var jane = new Person('Jane', 'Doe'); 
john.greet ();
jane.greet ();
console.log (john.__proto__);
console.log (jane.__proto__);
console.log (john.__proto__ === jane.__proto__);
// === will return true because variables jane and john have the same prototype in common- the greet function

