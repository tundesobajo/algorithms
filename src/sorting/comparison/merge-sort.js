const merge = require('./merge');

/**
 * Function to merge sort an array.
 * 
 * @param {any[]} arr Unsorted array
 * 
 * @returns {any[]} Sorted array 
 */
module.exports = function mergeSort(arr) {
  const len = arr.length;
  if (len <= 1) {
    return arr;
  }

  const mid = Math.ceil(len / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

//                        0 1 2 3 4 5 6 7 8 9 10
//            0 1 2 3 4 5 ----------+---------- 6 7 8 9 10
//      0 1 2 -----+----- 3 4 5           6 7 8 -----+---- 9 10
//   0 1 -+- 2         3 4 --+- 5      6 7 --+- 8         9 -+- 10
// 0 -+- 1           3 -+- 4          6 -+- 7
