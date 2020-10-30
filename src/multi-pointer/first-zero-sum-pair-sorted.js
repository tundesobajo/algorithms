/**
 * Function to find the first pair on numbers in an array 
 * that sum to zero.
 * Input is a sorted array.
 * 
 * @param {number[]} arr Sorted array of numbers
 * 
 * @returns {[number, number]} first zero sum pair
 */
module.exports = function firstZeroSumPairSorted(arr) {
  let x = 0;
  let y = arr.length - 1;
  while (x < y) {
    const sum = arr[x] + arr[y];
    if (sum < 0) {
      x++;
    } else if (sum > 0) {
      y--;
    } else {
      return [arr[x], arr[y]];
    }
  }
  return undefined;
}
