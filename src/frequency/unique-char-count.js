function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if ((code > 47 && code < 58) 
    || (code > 64 && code < 91) 
    || (code > 96 && code < 123)) {
    return true;
  }
  return false;
}

/**
 * Function to return the number of unique characters in a string;
 * @param {string} s
 */
module.exports = function uniqueCharCount(str) {
  const cnt = {};
  Array.prototype.forEach.call(str, c => {
    if (isAlphaNumeric(c)) {
      const char = c.toLowerCase();
      const count = cnt[char] || 0;
      cnt[char] = count + 1;
    }
  });
  return cnt;
}
