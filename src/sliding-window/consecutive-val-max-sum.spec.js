const { expect } = require('chai');
const consecutiveValMaxSum = require('./consecutive-val-max-sum');

describe('Consecutive Value Max Sum', function () {
  it('returns 10 as max consecutive sum', function () {
    const arr = [1, 2, 5, 2, 8, 1, 5];
    expect(consecutiveValMaxSum(arr, 2)).to.equal(10);
  });

  it('returns 17 as max consecutive sum', function () {
    const arr = [1, 2, 5, 2, 8, 1, 5];
    expect(consecutiveValMaxSum(arr, 4)).to.equal(17);
  });

  it('returns 6 as max consecutive sum', function () {
    expect(consecutiveValMaxSum([4, 2, 1, 6], 1)).to.equal(6);
  });

  it('returns 13 as max consecutive sum', function () {
    expect(consecutiveValMaxSum([4, 2, 1, 6, 2], 4)).to.equal(13);
  });

  it('returns null', function () {
    expect(consecutiveValMaxSum([], 4)).to.be.undefined;
  });
});
