/**
 * Function to return the index of pivot.
 * A pivot is the point in which you want to separate
 * data into lower (left) and larger (right) values.
 * 
 * @param {number} start Array start position
 * @param {number} len Array length
 * 
 * @returns {number} Index of pivot
 */
function pivotIndex(start, len) {
  // This always returns the middle element of the range.
  // Can alternatively return first or last element.
  return Math.floor((start + len) / 2);
}

/**
 * Function to perform a quick sort on an array in place.
 * - Step 1 Choose a pivot,
 * - Step 2 Place items less than pivot to the left of pivot,
 * - Step 3 Move to range of values on the left and right of pivot to repeat steps
 * 
 * @param {any[]} arr Unsorted array
 * 
 * @returns {any[]} Sorted array 
 */
module.exports = function quickSort(arr) {
  /**
   * Function to set a pivot on a range of values.
   * 
   * @param {number} start Range start position
   * @param {number} end  Range end position (exclusive)
   */
  function pivotRange(start, end) {
    if (start === end) return;

    // Get index of pivot
    let p = pivotIndex(start, end);

    // {swapIndex} is where to place the next value found that is less than pivot
    let swapIndex = start;

    // Iterate over range
    for (let i = start; i < end; i++) {

      // Compare pivot to current value 
      if (arr[i] < arr[p]) {
        // A value lower than pivot was found.
        // Swap the value in the {swapIndex} with the lower value that was found
        // and increment {swapIndex}.
        // This gathers all lower values to the left of {swapIndex}.
        // Note that neither left nor right are necessarily sorted.
        [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        if (p === swapIndex) {
          p = i;
        }
        swapIndex++;
      }
    }

    // Swap the pivot into it's correct position
    [arr[swapIndex], arr[p]] = [arr[p], arr[swapIndex]];

    // Repeat process for left and right sides
    pivotRange(start, swapIndex);
    pivotRange(swapIndex + 1, end);
  }
  pivotRange(0, arr.length);

  return arr;
}
