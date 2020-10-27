const assert = require('assert');
const matchBrackets = require('./match-brackets');


describe('Match brackets', function () {
  it('should return true', function () {
    assert.ok(matchBrackets('| | { [ ] } ( )'));
  });

  it('should return true', function () {
    assert.ok(matchBrackets('{ | [ ] ( ) | }'));
  });

  it('should return false', function () {
    assert.strictEqual(matchBrackets('{ [ ( ] ) }'), false);
  });

  it('should return false', function () {
    assert.strictEqual(matchBrackets('{ [ }'), false);
  });
});