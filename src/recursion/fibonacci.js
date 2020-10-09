/**
 * Function to return the nth fibonacci number.
 * 
 * @param {number} n The position of fiboncci number to find
 * 
 * @returns {number} The number in nth position
 */
module.exports = function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
