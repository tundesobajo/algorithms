/**
 * Function to merge two arrays in sorted order.
 * 
 * @param {any[]} left Sorted array
 * @param {any[]} right Sorted Array
 * 
 * @returns {any[]} Merged array
 */
module.exports = function merge(left, right) {
  let l = 0;
  let r = 0;
  const arr = [];
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      arr.push(left[l++]);
    } else {
      arr.push(right[r++]);
    }
  }
  while (l < left.length) {
    arr.push(left[l++])
  }
  while (r < right.length) {
    arr.push(right[r++]);
  }

  return arr;
}
