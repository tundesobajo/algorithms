const { expect } = require('chai');
const anagrams = require('./anagrams');

describe('Anagrams', function () {
  it('passes as anagram pair', function () {
    expect(anagrams('anagram', 'nagaram')).to.be.true;
  });

  it('fails as anagram pair', function () {
    expect(anagrams('aaz', 'zza')).to.be.false;
  });
});