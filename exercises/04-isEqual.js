/* Написать функцию сравнения двух массивов.
    fn([1, 2, 3], [1, 2, 3]) => true */

import validateParams from "./utils/validateParams.js";


function isEqual(firstArray, secondArray) {
    validateParams("array", firstArray, secondArray);

    return firstArray.length === secondArray.length &&
        firstArray.every((el, index) => el === secondArray[index])
}


