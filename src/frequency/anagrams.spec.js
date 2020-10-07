const assert = require('assert');
const anagrams = require('./anagrams');

describe('Anagrams', function () {
  it('passes as anagram pair', function () {
    assert.ok(anagrams('anagram', 'nagaram'));
  });
  
  it('fails as anagram pair', function () {
    assert.ok(!anagrams('aaz', 'zza'));
  });
});