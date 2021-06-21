// Convert JSON data to ARRAY with all countries in the world.
const getAllCountries = require('./helpers/data');

// Get all methods available to return this task.
const countries_methods = require('./helpers/countries_methods');

// Create an array with all countries from getAllCountries methods.
const COUNTRIES = getAllCountries();

// Count all languages available in each individual country.
const _COUNT_LANGUAGES = countries_methods.countAllLanguages(COUNTRIES);

// Get country with more official language.
const _HIGHEST_TOTAL = countries_methods.highestLanguages(_COUNT_LANGUAGES);

// Get most common language speak in the world.
const _MOST_COMMON_LANGUAGE = countries_methods.mostCommonLanguage(_COUNT_LANGUAGES);

// Get only countries that speak german.
const _COUNTRIES_SPEAK_GE = countries_methods.getByLanguage('de', COUNTRIES);

// Get total countries number.
const _TOTAL_COUNTRIES = countries_methods.getTotal(COUNTRIES);


const getTask2Data = () => {
   return {
        total: _TOTAL_COUNTRIES,
        speak_german: _COUNTRIES_SPEAK_GE,
        count_all_official: _COUNT_LANGUAGES,
        highest_languages: _HIGHEST_TOTAL,
        most_common: _MOST_COMMON_LANGUAGE
   }
}

module.exports = {
    getAllTaskData: getTask2Data
};