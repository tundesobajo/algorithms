const assert = require('assert');
const uniqueCharCount = require('./unique-char-count');

describe('uniqueCharCount', function () {
  it('returns character count', function () {
    assert.deepStrictEqual(
      uniqueCharCount('aa bbb c'),
      { a: 2, b: 3, c: 1 }
    );
  });
});
