const validate = require('./helpers/validations');
const chalk = require('chalk');

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

module.exports = visualNuts;