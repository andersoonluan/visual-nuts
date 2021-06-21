const config = require('../config');

const validate = (data) => {
    return !isNaN(data) && (Number(data) <= config.NUM_MAX_ACCEPTABLE) 
    && (Number(data) > config.NUM_MIN_ACCEPTABLE)  ? true : false;
}

module.exports = validate;