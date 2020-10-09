/**
 * Number to return the factorial of a given value.
 * 
 * @param {number} num Value to factor
 * 
 * @returns {number} The factorial of given number
 */
module.exports = function factorial(num) {
  if (num < 1) return 0;
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
