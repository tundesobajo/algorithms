const { expect } = require('chai');
const factorial = require('./factorial');

describe('Factorial', function () {
  it('returns 0', function () { expect(factorial(0)).to.equal(0) });
  it('returns 6', function () { expect(factorial(3)).to.equal(6) });
  it('returns 24', function () { expect(factorial(4)).to.equal(24) });
});
