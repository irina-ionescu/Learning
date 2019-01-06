//pass by value
function change(b) {
    b=2;
}
var a=1;
change(a);
console.log (a);
//pass by reference
function changeObj(d){
    //d is an object; property1 is a function and property2 is an object
    d.prop1 = function(){};
    d.prop2 = {};
}
var c = {};
//c is an empty object
c.prop1 = {};
changeObj(c);
console.log(c);
//will return { prop1: [Function], prop2: {} } because it points to the same object. function not {} c will become d