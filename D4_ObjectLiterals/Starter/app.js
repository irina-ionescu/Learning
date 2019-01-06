var person = { 
    //property of the object person (name/value pair: firstname is the name, 'John' is the value)
    firstname: 'Irina',
    //property of the object person
    lastname: 'Ionescu',
    //method of the object- a function; what we do with this object

    greet: function () {
        console.log ('Hello '+ this.firstname + ' ' + this.lastname + ', you are amazing!');
    }
//this. points at the name/value pair and returns the value
};
person.greet();
//another way to access the name/value of the object without using the dot: ['name']

console.log ( person['firstname'] );
