const assert = require('assert');
const quickSort = require('./quick-sort');

describe('Quick Sort', function () {
  it('sorts array', function () { assert.deepStrictEqual(quickSort([2, 4, 6, 1, 3]), [1, 2, 3, 4, 6]); });
  it('sorts array', function () { assert.deepStrictEqual(quickSort([2, 1, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]); });
  it('sorts array', function () { assert.deepStrictEqual(quickSort([2, 3, 1, 4, 5, 6, 1]), [1, 1, 2, 3, 4, 5, 6]); });
  it('sorts array', function () { assert.deepStrictEqual(quickSort([6, 5, 2, 3, 4, 5, 6, 1]), [1, 2, 3, 4, 5, 5, 6, 6]); });
});
