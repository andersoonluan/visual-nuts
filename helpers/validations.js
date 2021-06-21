const config = require('../config');

// Validate if data is a valid number (> 1 and <= 100) or if is NUMBER and not other type 
// such as: String, Object or Array for example.
const validate = (data) => {
    return !isNaN(data) && (Number(data) <= config.NUM_MAX_ACCEPTABLE) 
    && (Number(data) > config.NUM_MIN_ACCEPTABLE)  ? true : false;
}

module.exports = validate;