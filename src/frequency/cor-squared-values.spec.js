const { expect } = require('chai');
const corSquareValues = require('./cor-squared-values');

describe('Corresponding Squared values', function () {
  it('has corresponding square values', function () {
    expect(corSquareValues([1, 2, 3, 3], [9, 4, 1, 9])).to.be.true;
  });

  it('does not have corresponding frequency', function () {
    expect(corSquareValues([1, 2, 3, 1], [4, 1, 9])).to.be.false;
  });
});