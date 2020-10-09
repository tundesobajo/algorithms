const assert = require('assert');
const oddNumbers = require('./odd-numbers');

describe('Odd Numbers', function () {
  it('returns []', function () { assert.deepStrictEqual(oddNumbers([]), []); });
  it('returns []', function () { assert.deepStrictEqual(oddNumbers([2, 4]), []); });
  it('returns [1, 3, 5]', function () { assert.deepStrictEqual(oddNumbers([1, 2, 3, 4, 5]), [1, 3, 5]); });
});
