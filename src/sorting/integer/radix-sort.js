/**
 * Gets a digit from an integer in the position specified.
 * 
 * @param {number} num Integer number
 * @param {number} i Digit position
 * 
 * @return Integer at specified position or 0
 */
function digit(num, i) {
  return Math.floor(Math.abs(num) / 10 ** i) % 10;
}

/**
 * Returns count of digits in number.
 * 
 * @param {number} num Number to count
 * 
 * @returns Count of digits in number
 */
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Get the number of digits of the greatest number in an array.
 * 
 * @param {number[]} arr Array of integers
 * 
 * @returns Digit count of largest number
 */
function maxDigitCount(arr) {
  let max = 1;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCount(arr[i]));
  }

  return max;
}

/**
 * Function to perform a radix sort on an array.
 * Can only be performed on integers.
 * 
 * @param {number[]} arr Unsorted array of integers
 * 
 * @returns {number[]} Sorted array 
 */
module.exports = function radixSort(arr) {
  let numbers = arr;
  const maxDigitIndex = maxDigitCount(arr);

  // Iterate from the least to the most significant digit.
  // Each iteration picks the significant digit for grouping.
  for (let digitIndex = 0; digitIndex < maxDigitIndex; digitIndex++) {
    const bucket = Array.from({ length: 10 }, () => []);

    // Iterate through the array and place each number in the
    // group of it's significant digit.
    for (let j = 0; j < arr.length; j++) {
      const currentNumber = arr[j];
      const d = digit(currentNumber, digitIndex);
      bucket[d].push(currentNumber);
    }

    // Flatten bucket
    numbers = [].concat(...bucket);
  }

  return numbers;
}
