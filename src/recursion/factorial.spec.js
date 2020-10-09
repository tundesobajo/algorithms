const assert = require('assert');
const factorial = require('./factorial');

describe('Factorial', function () {
  it('returns 0', function () { assert.strictEqual(factorial(0), 0)});
  it('returns 6', function () { assert.strictEqual(factorial(3), 6)});
  it('returns 24', function () { assert.strictEqual(factorial(4), 24)});
});
