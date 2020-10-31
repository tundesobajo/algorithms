const { expect } = require('chai');
const substring = require('./substring');

describe('Substring', function () {
  it('finds at 3', function () { expect(substring('abcdefghij', 'def')).to.equal(3); });
  it('finds at 0', function () { expect(substring('chip off the old block', 'chip')).to.equal(0); });
  it('finds at 20', function () { expect(substring('what eyes have not seen', 'een')).to.equal(20); });
  it('finds at 12', function () { expect(substring('what is the way forward', 'way')).to.equal(12); });
  it('does not find', function () { expect(substring('the hills are alive', 'maria')).to.equal(-1); });
  it('finds at 1', function () { expect(substring('eel', 'el')).to.equal(1); });
});