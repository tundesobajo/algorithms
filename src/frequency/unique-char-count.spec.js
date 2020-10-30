const { expect } = require('chai');
const uniqueCharCount = require('./unique-char-count');

describe('uniqueCharCount', function () {
  it('returns character count', function () {
    expect(uniqueCharCount('aa bbb c')).to.eql({ a: 2, b: 3, c: 1 });
  });
});
