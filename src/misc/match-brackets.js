/**
 * Function to check that brackets are matched
 * 
 * @param {string} str Input string
 * 
 * @returns {boolean} True if all brackets are matched
 */
module.exports = function matchBrackets(str) {
  const openers = { '{': '{', '[': '[', '(': '(', '|': '|' };
  const closers = { '}': '}', ']': ']', ')': ')', '|': '|' };
  const closersToOpeners = { '}': '{', ']': '[', ')': '(', '|': '|' };
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const opener = openers[str[i]];
    const closer = closers[str[i]];
    const lastMatch = stack[stack.length - 1];

    if (opener) {
      // Handle cases like the pipe "|" where opener and closer are the same
      if (closer && lastMatch === closer) {
        stack.pop();
      } else {
        stack.push(opener);
      }
    } else if (closer) {
      if (lastMatch === closersToOpeners[closer]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
}