/**
 * Function to bubble sort an array.
 * Optimized for nearly sorted arrays.
 * 
 * @param {any[]} arr Unsorted array
 * 
 * @returns {any[]} Sorted array 
 */
module.exports = function bubbleSort(arr) {
  let swap = true;

  for (let i = 0; i < arr.length && swap; i++) {
    swap = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swap = true;
      }
    }
  }
  return arr;
}
