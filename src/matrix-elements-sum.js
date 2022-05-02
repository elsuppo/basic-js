// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0
  matrix.forEach((row, indexRow) => {
    row.forEach((el, indexEl) => {
      if (indexRow === 0 || matrix[indexRow - 1][indexEl] !== 0) {
        result += el
      }
    })
  })
  return result
}

module.exports = {
  getMatrixElementsSum
};
