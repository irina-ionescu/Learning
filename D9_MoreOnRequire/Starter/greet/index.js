var english = require('./english');
var spanish = require('./spanish');
//module.exports will make available an object on the fly {} that is name/value pairs; name -> english : english <- value
module.exports = {
    english : english,
    spanish : spanish
};
// will have a function with two methods: one is english and one is spanish
