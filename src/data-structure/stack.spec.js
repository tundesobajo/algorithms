const assert = require('assert');
const Stack = require('./stack');

describe('Stack', function () {
  let stack;

  beforeEach(function () {
    stack = new Stack();
  });

  describe('#push', function () {
    it('can push 3 values into stack', function () {
      assert.strictEqual(stack.push('One'), 1);
      assert.strictEqual(stack.push('Two'), 2);
      assert.strictEqual(stack.push('Three'), 3);
    });
  });

  describe('#pop', function () {
    it('can pop 3 values from stack', function () {
      stack.push('One');
      stack.push('Two');
      stack.push('Three');

      assert.strictEqual(stack.pop(), 'Three');
      assert.strictEqual(stack.pop(), 'Two');
      assert.strictEqual(stack.pop(), 'One');
      assert.strictEqual(stack.size, 0);
    });
  });
});
