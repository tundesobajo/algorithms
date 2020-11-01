const { expect } = require('chai');
const insertionSort = require('./insertion-sort');

describe('Insertion Sort', function () {
  it('sorts array', function () { expect(insertionSort([1, 3, 2, 1])).to.contain.members([1, 1, 2, 3]); });
  it('sorts array', function () { expect(insertionSort([2, 4, 6, 1, 3, 5])).to.contain.members([1, 2, 3, 4, 5, 6]); });
  it('sorts array', function () { expect(insertionSort([2, 1, 3, 4, 5, 6])).to.contain.members([1, 2, 3, 4, 5, 6]); });
  it('sorts array', function () { expect(insertionSort([2, 3, 1, 4, 5, 6])).to.contain.members([1, 2, 3, 4, 5, 6]); });
  it('sorts array', function () { expect(insertionSort([2, 3, 4, 5, 6, 1])).to.contain.members([1, 2, 3, 4, 5, 6]); });
});
