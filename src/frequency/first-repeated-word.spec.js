const assert = require('assert');
const firstRepeatedWord = require('./first-repeated-word');

describe('First Repeated Word', function () {
  it('returns and', function () { assert.strictEqual(firstRepeatedWord('Say go and he and I will go'), 'and'); });
  it('returns pray', function () { assert.strictEqual(firstRepeatedWord('Watch and pray, pray I say.'), 'pray'); });
  it('returns 10', function () { assert.strictEqual(firstRepeatedWord('10 plus 1 can not be 10'), '10'); });
  it('returns 10', function () { assert.strictEqual(firstRepeatedWord('10 plus 1 can not be 10'), '10'); });
  it('returns undefined', function () { assert.strictEqual(firstRepeatedWord('10 plus 1 can not be 12'), undefined); });
});
