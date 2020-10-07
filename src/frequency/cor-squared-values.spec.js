const assert = require('assert');
const corSquareValues = require('./cor-squared-values'); 

describe('Corresponding Squared values', function () {
  it('has corresponding square values', function () {
    assert.ok(corSquareValues([1,2,3,3], [9,4,1,9]));
  });

  it('does not have corresponding frequency', function () {
    assert.ok(!corSquareValues([1,2,3,1], [4,1,9]));
  });
});