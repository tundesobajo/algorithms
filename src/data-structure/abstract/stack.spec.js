const { expect } = require('chai');
const Stack = require('./stack');

describe('Stack', function () {
  let stack;

  beforeEach(function () {
    stack = new Stack();
  });

  describe('#push', function () {
    it('can push 3 values into stack', function () {
      expect(stack.push('One')).to.equal(1);
      expect(stack.push('Two')).to.equal(2);
      expect(stack.push('Three')).to.equal(3);
    });
  });

  describe('#pop', function () {
    it('can pop 3 values from stack', function () {
      stack.push('One');
      stack.push('Two');
      stack.push('Three');

      expect(stack.pop()).to.equal('Three');
      expect(stack.pop()).to.equal('Two');
      expect(stack.pop()).to.equal('One');
      expect(stack.size).to.equal(0);
    });
  });
});
