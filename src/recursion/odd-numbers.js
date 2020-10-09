/**
 * Function to return odd numbers from an array.
 * 
 * @param {number[]} arr Array of numbers
 * 
 * @returns {number} Array of odd numbers
 */
module.exports = function oddNumbers(arr) {
  if (arr.length === 0) return arr;

  const tmp = [];
  if (arr[0] % 2) {
    tmp.push(arr[0]);
  }
  return tmp.concat(oddNumbers(arr.slice(1)));
}
