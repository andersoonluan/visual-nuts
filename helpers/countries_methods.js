

//returns the number of countries in the world
function getTotal(data){
    return data.length;
}

//finds the country with the most official languages, where they officially speak German (de).
function getByLanguage(lang, data){
    return data.filter(x=> x[0].languages.includes(lang));
}

// that counts all the official languages spoken in the listed countries.
function countAllLanguages(data){
    let allCountries = [];
    data.map(country => {
        let con = country[0];
        con['total_language'] = country[0].languages.length;
        allCountries.push(con);
    })
    return allCountries;
}

// to find the country with the highest number of official languages.
function highestLanguages(array){
    return Math.max.apply(Math, array.map(function(country) { return country.total_language; }))
}

// to find the most common official language(s), of all countries.
function mostCommonLanguage(array){
    var arr = array;
    var m = arr.reduce(function(i, v) {
      if (i[v.languages] === undefined) {
        i[v.languages] = 1
      } else {
        i[v.languages] = i[v.languages] + 1;
      }
      return i;
    }, {});
    var getMaxRepeated = Math.max(...Object.values(m));
    var duplicateItems = [];

    for (var keys in m) {
      if (m[keys] === getMaxRepeated) {
        duplicateItems.push(keys)
      }
    }
    return duplicateItems;
}

module.exports = {
    getByLanguage: getByLanguage,
    countAllLanguages: countAllLanguages,
    highestLanguages: highestLanguages,
    mostCommonLanguage: mostCommonLanguage,
    getTotal: getTotal
}