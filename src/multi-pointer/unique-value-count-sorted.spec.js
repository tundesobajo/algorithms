const { expect } = require('chai');
const uniqueValueCountSorted = require('./unique-value-count-sorted');

describe('Unique Value Count Sorted', function () {
  it('counts 7 unique values', function () {
    const arr = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 12, 13];
    expect(uniqueValueCountSorted(arr)).to.equal(7);
  });

  it('counts 1 unique value', function () {
    expect(uniqueValueCountSorted([130])).to.equal(1);
  });

  it('counts zero unique values', function () {
    expect(uniqueValueCountSorted([])).to.equal(0);
  });
});
