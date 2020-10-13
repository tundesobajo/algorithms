const assert = require('assert');
const bubbleSort = require('./bubble-sort');

describe('Bubble Sort', function () {
  it('sorts array', function () { assert.deepStrictEqual(bubbleSort([2,4,6,1,3,5]), [1,2,3,4,5,6]); });
  it('sorts array', function () { assert.deepStrictEqual(bubbleSort([2,1,3,4,5,6]), [1,2,3,4,5,6]); });
  it('sorts array', function () { assert.deepStrictEqual(bubbleSort([2,3,1,4,5,6]), [1,2,3,4,5,6]); });
  it('sorts array', function () { assert.deepStrictEqual(bubbleSort([2,3,4,5,6,1]), [1,2,3,4,5,6]); });
});