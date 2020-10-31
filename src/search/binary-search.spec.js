const { expect } = require('chai');
const binarySearch = require('./binary-search');

describe('Index of Value Sorted', function () {
  it('finds number in position 0', function () {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 1)).to.equal(0);
  });

  it('finds number in position 1', function () {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 2)).to.equal(1);
  });

  it('finds number in position 3', function () {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 4)).to.equal(3);
  });

  it('finds number in position 5', function () {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 6)).to.equal(5);
  });

  it('returns -1', function () {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 11)).to.equal(-1);
  });

  it('returns -1', function () {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 0)).to.equal(-1);
  });

  it('returns -1', function () {
    expect(binarySearch([], 9)).to.equal(-1);
  });
});