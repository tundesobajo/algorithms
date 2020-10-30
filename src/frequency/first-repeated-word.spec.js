const { expect } = require('chai');
const firstRepeatedWord = require('./first-repeated-word');

describe('First Repeated Word', function () {
  it('returns and', function () { expect(firstRepeatedWord('Say go and he and I will go')).to.equal('and'); });
  it('returns pray', function () { expect(firstRepeatedWord('Watch and pray, pray I say.')).to.equal('pray'); });
  it('returns 10', function () { expect(firstRepeatedWord('10 plus 1 can not be 10')).to.equal('10'); });
  it('returns undefined', function () { expect(firstRepeatedWord('10 plus 1 can not be 12')).to.be.undefined; });
});
