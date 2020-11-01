const { expect } = require('chai');
const mergeSort = require('./merge-sort');

describe.only('Bubble Sort', function () {
  it('sorts array', function () { expect(mergeSort([2, 4, 6, 1, 3, 5])).to.contain.members([1, 2, 3, 4, 5, 6]); });
  it('sorts array', function () { expect(mergeSort([2, 1, 3, 4, 5, 6])).to.contain.members([1, 2, 3, 4, 5, 6]); });
  it('sorts array', function () { expect(mergeSort([2, 3, 1, 4, 5, 6])).to.contain.members([1, 2, 3, 4, 5, 6]); });
  it('sorts array', function () { expect(mergeSort([2, 3, 4, 5, 6, 1])).to.contain.members([1, 2, 3, 4, 5, 6]); });
  it('sorts array', function () { expect(mergeSort([2, 3, 4, 5, 6, 1, 1, 6, 3, 3])).to.contain.members([1, 1, 2, 3, 3, 3, 4, 5, 6, 6]); });
});
