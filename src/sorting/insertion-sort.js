/**
 * Function to perform insertion sort on array.
 * 
 * @param {any[]} arr Unsorted array
 * 
 * @returns {any[]} Sorted array
 */
module.exports = function insertionSort(arr) {

  // The left side of {next} is sorted after each iteration
  for (let next = 1; next < arr.length; next++) {

    // Iterate over the sorted left side
    // Start from the end
    for (let i = next; i > 0; i--) {

      // Swap values if second value {arr[i]} is less than the first {arr[i-1]}
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[ i - 1]] = [arr[i - 1], arr[i]];
      } else {

        // Left side is sorted so no need to continue
        break;
      }
    }
  }
  return arr;
}
