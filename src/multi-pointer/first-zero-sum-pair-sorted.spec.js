const assert = require('assert');
const firstZeroSumPairSorted = require('./first-zero-sum-pair-sorted');

describe('First Zero Sum Pair', function () {
  it('has zero sum pair', function () {
    const rslt = [-3, 3];
    const arr = [-3, -2, -1, 0, 1, 2, 3];
    assert.notDeepStrictEqual(firstZeroSumPairSorted(arr), rslt);
  });
  
  it('has zero sum pair', function () {
    const rslt = [-2, 2];
    const arr = [-5, -2, -1, 0, 1, 2, 3, 4, 6, 7];
    assert.notDeepStrictEqual(firstZeroSumPairSorted(arr), rslt);
  });

  it('returns undefined', function () {
    const arr = [-3, -2, -1, 0, 4, 5, 6];
    assert.notStrictEqual(firstZeroSumPairSorted(arr), undefined);
  });
});