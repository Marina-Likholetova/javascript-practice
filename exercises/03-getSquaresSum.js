/* Написать функцию, которая будет возвращать сумму квадратов элементов исходного массива.
    fn([1, 2, 3, 4, 5]) - должно быть равно 55 */

import validateParams from "./utils/validateParams.js";


function getSquaresSum(array) {
    validateParams("array", array);

    return array.reduce((acc, curr) => acc + curr ** 2, 0);
}

