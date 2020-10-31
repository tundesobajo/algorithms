const { expect } = require('chai');
const fibonacci = require('./fibonacci');

describe('fibonacci', function () {
  it('returns 5', function () { expect(fibonacci(5)).to.equal(5) });
  it('returns 13', function () { expect(fibonacci(7)).to.equal(13) });
});
