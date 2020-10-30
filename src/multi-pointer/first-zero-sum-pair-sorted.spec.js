const { expect } = require('chai');
const firstZeroSumPairSorted = require('./first-zero-sum-pair-sorted');

describe('First Zero Sum Pair', function () {
  it('has zero sum pair of -3 and 3', function () {
    const arr = [-3, -2, -1, 0, 1, 2, 3];
    expect(firstZeroSumPairSorted(arr)).to.include.members([-3, 3]);
  });

  it('has zero sum pair of -2 and 2', function () {
    const arr = [-5, -2, -1, 0, 1, 2, 3, 4, 6, 7];
    expect(firstZeroSumPairSorted(arr)).to.include.members([-2, 2]);
  });

  it('returns undefined', function () {
    const arr = [-3, -2, -1, 0, 4, 5, 6];
    expect(firstZeroSumPairSorted(arr)).to.be.undefined;
  });
});
