/**
 * Function to binary search a value in an array.
 * 
 * @param {any[]} arr Sorted array
 * @param {any} v Search value
 * 
 * @returns {number} Index of value in array
 */
module.exports = function binarySearch(arr, v) {
  let l = 0;
  let r = arr.length;
  while (l < r) {
    const m = Math.floor((l + r - 1) / 2);
    if (v === arr[m]) {
      return m;
    }
    if (v > arr[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return -1;
}
