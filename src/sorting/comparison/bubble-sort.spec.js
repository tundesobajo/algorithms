const { expect } = require('chai');
const bubbleSort = require('./bubble-sort');

describe('Bubble Sort', function () {
  it('sorts array', function () { expect(bubbleSort([2, 4, 6, 1, 3, 5])).to.contain.members([1, 2, 3, 4, 5, 6]); });
  it('sorts array', function () { expect(bubbleSort([2, 1, 3, 4, 5, 6])).to.contain.members([1, 2, 3, 4, 5, 6]); });
  it('sorts array', function () { expect(bubbleSort([2, 3, 1, 4, 5, 6])).to.contain.members([1, 2, 3, 4, 5, 6]); });
  it('sorts array', function () { expect(bubbleSort([2, 3, 4, 5, 6, 1])).to.contain.members([1, 2, 3, 4, 5, 6]); });
});
