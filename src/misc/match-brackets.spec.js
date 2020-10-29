require('chai').should();
const matchBrackets = require('./match-brackets');

describe('Match brackets', function () {
  it('should be true for "| | { [ ] } ( )"', function () {
    matchBrackets('| | { [ ] } ( )').should.be.true;
  });

  it('should be true for "{ | [ ] ( ) | }"', function () {
    matchBrackets('{ | [ ] ( ) | }').should.be.true;
  });

  it('should be false for "{ [ ( ] ) }"', function () {
    matchBrackets('{ [ ( ] ) }').should.be.false;
  });

  it('should be false for "{ [ }"', function () {
    matchBrackets('{ [ }').should.be.false;
  });
});
