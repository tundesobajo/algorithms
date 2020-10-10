/**
 * Function to perform selection sort on an array.
 * 
 * @param {any[]} arr Unsorted array
 * 
 * @returns {any[]} Sorted array 
 */
module.exports = function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if(min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
