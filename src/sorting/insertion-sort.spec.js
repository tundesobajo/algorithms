const assert = require('assert');
const insertionSort = require('./insertion-sort');

describe('Insertion Sort', function () {
  it('sorts array', function () { assert.deepStrictEqual(insertionSort([1,3,2,1]), [1,1,2,3]); });
  it('sorts array', function () { assert.deepStrictEqual(insertionSort([2,4,6,1,3,5]), [1,2,3,4,5,6]); });
  it('sorts array', function () { assert.deepStrictEqual(insertionSort([2,1,3,4,5,6]), [1,2,3,4,5,6]); });
  it('sorts array', function () { assert.deepStrictEqual(insertionSort([2,3,1,4,5,6]), [1,2,3,4,5,6]); });
  it('sorts array', function () { assert.deepStrictEqual(insertionSort([2,3,4,5,6,1]), [1,2,3,4,5,6]); });
});
