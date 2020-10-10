/**
 * Function to find a string in another.
 * 
 * @param {string} str Text to be search
 * @param {string} sub Value to search for
 * 
 * @returns {number} Index of substring
 */
module.exports = function substring(str, sub) {
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === sub[j]) {
      j++;
    } else {
      if (j > 0) {
        i--;
      }
      j = 0;
    }
    if (j === sub.length) {
      return i - j + 1;
    }    
  }
  
  return -1;
}
