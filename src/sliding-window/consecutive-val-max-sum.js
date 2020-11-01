/**
 * Function to return the maximum sum of a specified number of
 * consecutive values in an array.
 * 
 * @param {number[]} arr Array of numbers
 * @param {number} num numbers of consecutive values to sum
 * 
 * @returns {number} Max consecutive sum
 */
module.exports = function consecutiveValMaxSum(arr, num) {
  if (num === 0 || arr.length < num) return undefined;

  let max = 0;
  let tmp = 0;

  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  tmp = max;

  for (let i = num; i < arr.length; i++) {
    tmp = tmp - arr[i - num] + arr[i];
    if (max < tmp) max = tmp;
  }

  return max;
}