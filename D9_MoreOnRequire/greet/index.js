var english = require('./english');     //The require function returns what module.exports is equal to in the module
var spanish = require('./spanish');

module.exports = {
    english: english,       //same as:     english: require(',/english');     or  name: function(){}
    spanish: spanish
}