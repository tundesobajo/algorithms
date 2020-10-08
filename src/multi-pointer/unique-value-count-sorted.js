/**
 * Function to count the number of unique values in a sorted array.
 * 
 * @param {number[]} arr Sorted array of numbers
 * 
 * @returns {number} unique value count
 */
module.exports = function uniqueValueCountSorted(arr) {
  const l = arr.length;
  if (l < 2) return l;

  let x = 0
  let y = 0;
  let count = 0;
  while (y < l) {
    y++;
    if (arr[x] !== arr[y]) {
      count++;
      x = y;
    }
  }
  
  return count;
}