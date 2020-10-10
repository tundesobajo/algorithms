const assert = require('assert');
const substring = require('./substring');

describe('Substring', function () {
  it('finds at 3', function () { assert.strictEqual(substring('abcdefghij', 'def'), 3); });
  it('finds at 0', function () { assert.strictEqual(substring('chip off the old block', 'chip'), 0); });
  it('finds at 20', function () { assert.strictEqual(substring('what eyes have not seen', 'een'), 20); });
  it('finds at 12', function () { assert.strictEqual(substring('what is the way forward', 'way'), 12);});
  it('does not find', function () { assert.strictEqual(substring('the hills are alive', 'maria'), -1); });
  it('finds at 1', function () { assert.strictEqual(substring('eel', 'el'), 1); });
});