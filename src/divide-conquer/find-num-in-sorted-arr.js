/**
 * Function to find a number in a sorted array.
 * 
 * @param {number[]} arr Sorted array of integers 
 * @param {number} num Number to find in array
 * 
 * @returns {number} Index of number if found or -1
 */
module.exports = function findNumInSortedArr(arr, num) {
  if (arr.length < 1) return -1;
  
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const mid = Math.ceil((end + start + 1) / 2);
    if (arr[mid] > num) {
      end = mid - 1;
    } else {
      start = mid;
    }
  }

  return arr[start] === num ? start : -1;
}
