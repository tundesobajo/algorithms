const { expect } = require('chai');
const radixSort = require('./radix-sort');

describe('Radix Sort', function () {
  it('sorts array', function () { expect(radixSort([2, 4, 6, 1, 3])).to.contain.members([1, 2, 3, 4, 6]); });
  it('sorts array', function () { expect(radixSort([2, 1, 3, 4, 5, 6])).to.contain.members([1, 2, 3, 4, 5, 6]); });
  it('sorts array', function () { expect(radixSort([2, 3, 1, 4, 5, 6, 1])).to.contain.members([1, 1, 2, 3, 4, 5, 6]); });
  it('sorts array', function () { expect(radixSort([6, 5, 2, 3, 4, 5, 6, 1])).to.contain.members([1, 2, 3, 4, 5, 5, 6, 6]); });
});
