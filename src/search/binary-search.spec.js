const assert = require('assert');
const binarySearch = require('./binary-search');

describe('Index of Value Sorted', function() {
  it('finds number in position 0', function () {
    assert.strictEqual(binarySearch([1, 2, 3, 4, 5, 6], 1), 0);
  });

  it('finds number in position 1', function () {
    assert.strictEqual(binarySearch([1, 2, 3, 4, 5, 6], 2), 1);
  });

  it('finds number in position 3', function () {
    assert.strictEqual(binarySearch([1, 2, 3, 4, 5, 6], 4), 3);
  });

  it('finds number in position 5', function () {
    assert.strictEqual(binarySearch([1, 2, 3, 4, 5, 6], 6), 5);
  });

  it('returns -1', function () {
    assert.strictEqual(binarySearch([1, 2, 3, 4, 5, 6], 11), -1);
  });

  it('returns -1', function () {
    assert.strictEqual(binarySearch([1, 2, 3, 4, 5, 6], 0), -1);
  });

  it('returns -1', function () {
    assert.strictEqual(binarySearch([], 9), -1);
  });
});