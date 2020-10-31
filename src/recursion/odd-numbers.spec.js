const { expect } = require('chai');
const oddNumbers = require('./odd-numbers');

describe('Odd Numbers', function () {
  it('returns []', function () { expect(oddNumbers([])).to.include.members([]); });
  it('returns []', function () { expect(oddNumbers([2, 4])).to.include.members([]); });
  it('returns [1, 3, 5]', function () { expect(oddNumbers([1, 2, 3, 4, 5])).to.include.members([1, 3, 5]); });
});
