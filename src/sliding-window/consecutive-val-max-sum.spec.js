const assert = require('assert');
const consecutiveValMaxSum = require('./consecutive-val-max-sum');

describe('Consecutive Value Max Sum', function () {
  it('returns 10 as max consecutive sum', function () {
    const arr = [1, 2, 5, 2, 8, 1, 5];
    assert.strictEqual(consecutiveValMaxSum(arr, 2), 10);
  });
  
  it('returns 17 as max consecutive sum', function () {
    const arr = [1, 2, 5, 2, 8, 1, 5];
    assert.strictEqual(consecutiveValMaxSum(arr, 4), 17);
  });

  it('returns 6 as max consecutive sum', function () {
    assert.strictEqual(consecutiveValMaxSum([4, 2, 1, 6], 1), 6);
  });

  it('returns 13 as max consecutive sum', function () {
    assert.strictEqual(consecutiveValMaxSum([4, 2, 1, 6, 2], 4), 13);
  });

  it('returns null', function () {
    assert.strictEqual(consecutiveValMaxSum([], 4), null);
  });
});