/**
 * Function to return the first repeated word.
 * 
 * @param {string} str Text to search through 
 * @param {boolean} caseSensitive Case sensitivity indicator
 * 
 * @returns {string} First repeat
 */
module.exports = function firstRepeatedWord(str, caseSensitive = false) {
  const delimiters = new Set(' \t,:;-.');
  const wordSet = new Set();
  let newWordLength = 0;

  // Traverse the whole array
  for (let j = 0; j <= str.length; j++) {

    // Check for possible match when delimeter or end of string is reached
    if (delimiters.has(str[j]) || j === str.length) {

      // A {newWordLength} greater than zero means a new word was found
      if (newWordLength > 0) {
        const tmp = str.substr(j - newWordLength, newWordLength);
        const w = caseSensitive ? tmp : tmp.toLowerCase();

        // Return word if it is already in the word set
        if (wordSet.has(w)) {
          return w;
        }

        // Add new word to set
        wordSet.add(w);
      }

      // Reset {newWordLength}
      newWordLength = 0;
    } else {

      // Increment {wordLength} when a characters
      // that is not a delimeters is found
      newWordLength++;
    }
  }

  return undefined;
}
