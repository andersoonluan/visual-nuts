const fs = require('fs');


// Get all countries from JSON file.
const getAllCountries = () => {
    const countries = JSON.parse(fs.readFileSync('data/countries.json', 'utf8'));
    return Object.keys(countries).map((key) => [countries[key]])
}

module.exports = getAllCountries;