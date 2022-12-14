/* Написать функцию, которая преобразует многомерный массив в одномерный.
    fn([1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]) */

import validateParams from "./utils/validateParams.js";


function flattenArray(array) {
    validateParams("array", array);

    // Option 1
    let result = [];
    (function flat(value) {
        Array.isArray(value)
            ? value.forEach(el => flat(el))
            : result.push(value)
    })(array)

    return result;

    // Option 2 
    // return array.flat(Infinity);
}


