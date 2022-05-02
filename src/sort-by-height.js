const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = []

  const newArray = arr.filter((element) => element !== -1)
  newArray.sort((a, b) => a - b)
  
  let indexNewArray = 0
  arr.forEach((element) => {
    if (element === -1) {
      result.push(element)
    } else {
      result.push(newArray[indexNewArray])
      indexNewArray++
    }
  })

  return result
}

module.exports = {
  sortByHeight
};
