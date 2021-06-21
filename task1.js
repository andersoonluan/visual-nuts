const validate = require('./helpers/validations');
const chalk = require('chalk');

/* Write or describe an algorithm that prints the whole integer numbers to the console, start
from the number 1, and print all numbers going up to the number 100.

However, when the number is divisible by 3, do not print the number, but print the word
'Visual'. If the number is divisible by 5, do not print the number, but print 'Nuts'. And for all
numbers divisible by both (eg: the number 15) the same, but print 'Visual Nuts'.

How will you keep this code safe from bugs? Show how you would guarantee that this code
keeps working when developers start making small feature adjustments. (Maybe we would
want to print the first 500 numbers, ...). */
function visualNuts(number){
    if(validate(number)){
          let result = [];
          for (var i = 1; i <= number; i++) {
          let num1 = i % 3 == 0;
          let num2 = i % 5 == 0;
          let info = num1 ? num2 ? "Visual Nuts" : "Visual" : num2 ? "Nuts" : i;
            console.log(info);
            result.push(info.toString());
          }
          return {failed: false, data: result};
    }
    return {failed: true, message: `Attribute '${number}' is not valid. You should use only numbers > 1 and <= 100.`};
}

module.exports = {
    visualNuts: visualNuts
}