/**
 * Function to return true if values in first array have 
 * corresponding squared values in second array.
 * The frequency of the values must be the same.
 * Order of values is not important.
 * 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * 
 * @returns {boolean}
 */
module.exports = function corSquareValues(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const map = new Map();
  for (let i = 0; i < arr2.length; i+= 1) {
    const count = map.get(arr2[i]) || 0;
    map.set(arr2[i], count + 1);
  }
  
  for (let i = 0; i < arr1.length; i+= 1) {
    const sqr = arr1[i]**2;
    const count = map.get(sqr) || 0;
    if (!count) return false;
    map.set(sqr, count - 1);
  }

  return true;
}
