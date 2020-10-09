const assert = require('assert');
const fibonacci = require('./fibonacci');

describe('fibonacci', function () {
  it('returns 5', function () { assert.strictEqual(fibonacci(5), 5)});
  it('returns 13', function () { assert.strictEqual(fibonacci(7), 13)});
});
