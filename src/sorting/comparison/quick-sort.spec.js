const { expect } = require('chai');
const quickSort = require('./quick-sort');

describe('Quick Sort', function () {
  it('sorts array', function () { expect(quickSort([2, 4, 6, 1, 3])).to.contain.members([1, 2, 3, 4, 6]); });
  it('sorts array', function () { expect(quickSort([2, 1, 3, 4, 5, 6])).to.contain.members([1, 2, 3, 4, 5, 6]); });
  it('sorts array', function () { expect(quickSort([2, 3, 1, 4, 5, 6, 1])).to.contain.members([1, 1, 2, 3, 4, 5, 6]); });
  it('sorts array', function () { expect(quickSort([6, 5, 2, 3, 4, 5, 6, 1])).to.contain.members([1, 2, 3, 4, 5, 5, 6, 6]); });
});
