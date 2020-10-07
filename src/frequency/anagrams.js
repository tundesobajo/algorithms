/**
 * Function to determine if one string is an anagram of the other.
 * @param {string} a 
 * @param {string} b 
 * 
 * @returns {boolean}
 */
module.exports = function anagrams (a, b) {
  if (a.length !== b.length) return false;

  const map = {};
  for (let i = 0; i < a.length; i+= 1) {
    const count = map[a[i]] || 0;
    map[a[i]] = count + 1;
  }

  for (let i = 0; i < b.length; i+= 1) {
    const count = map[b[i]] || 0;
    if (!count) return false;
    map[b[i]] = count - 1;
  }

  return true;
}