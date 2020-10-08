const assert = require('assert');
const uniqueValueCountSorted = require('./unique-value-count-sorted');

describe('Unique Value Count Sorted', function () {
  it('counts 7 unique values', function () {
    const arr = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 12, 13];
    assert.strictEqual(uniqueValueCountSorted(arr), 7);
  });

  it('counts 1 unique value', function () {
    assert.strictEqual(uniqueValueCountSorted([130]), 1);
  });

  it('counts zero unique values', function () {
    assert.strictEqual(uniqueValueCountSorted([]), 0);
  });
});