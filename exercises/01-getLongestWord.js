/* Написать функцию, которая находит самое длинное слово в строке.
    строка - "What is the average airspeed velocity of an unladen swallow" */

import validateParams from "./utils/validateParams.js";


function getLongestWord(string) {
    validateParams("string", string);

    return string.split(" ").sort((a, b) => b.length - a.length)[0];
}




