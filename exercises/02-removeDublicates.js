/* Написать функцию, которая будет удалять дубликаты из массива. 
    (Использовать array.reduce) */

import validateParams from "./utils/validateParams.js";


function removeDublicates(array) {
    validateParams("array", array);

    return array.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], [])
}


