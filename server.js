const task1 = require('./task1');
const task2 = require('./task2');

const NUMBER_NUTS = 100;

const _RESULT_TASK1 = task1.visualNuts(NUMBER_NUTS);
const _RESULT_TASK2 = task2.getAllTaskData();



console.log(`==== RESULT TASK 1: `, _RESULT_TASK1);
console.log(`==== RESULT TASK 2: `, _RESULT_TASK2);


// =============================================== //
// PLEASE SEE ALL INFORMATION AVAILABLE BELOW *   //
// ============================================= //

// You can use this console.log to return only all official languages numbers;
//console.log(`==== RESULT TASK 2 [TOTAL LANGUAGES COUNTRIES]: `, _RESULT_TASK2.count_all_official);

// You can use this console.log to return only the highest language spoken;
//console.log(`==== RESULT TASK 2 [HIGHEST SPOKEN]: `, _RESULT_TASK2.highest_languages);

// You can use this console.log to return only the most common;
//console.log(`==== RESULT TASK 2 [MOST COMMON]: `, _RESULT_TASK2.most_common);

// You can use this console.log to return only german spoken;
//console.log(`==== RESULT TASK 2 [HIGHEST SPOKEN]: `, _RESULT_TASK2.speak_german);

// You can use this console.log to return only the total of countries in the world;
//console.log(`==== RESULT TASK 2 [TOTAL COUNTRIES]: `, _RESULT_TASK2.total);