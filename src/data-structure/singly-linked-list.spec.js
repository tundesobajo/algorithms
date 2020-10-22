const assert = require('assert');
const SinglyLinkedList = require('./singly-linked-list');

describe('Singly Linked List', function () {
  let list;
  beforeEach(function () {
    list = new SinglyLinkedList();
  });

  describe('#push()', function () {
    it('can push first value', function () {
      assert.strictEqual(list.push('One'), list);
      assert.strictEqual(list.head.value, 'One');
      assert.strictEqual(list.tail.value, 'One');
      assert.strictEqual(list.length, 1);
    });

    it('can push second value', function () {
      list.push('One');

      assert.strictEqual(list.push('Two'), list);
      assert.strictEqual(list.head.next.value, 'Two');
      assert.strictEqual(list.tail.value, 'Two');
      assert.strictEqual(list.length, 2);
    });

    it('can push third value', function () {
      list.push('One');
      list.push('Two');

      assert.strictEqual(list.push('Three'), list);
      assert.strictEqual(list.head.next.next.value, 'Three');
      assert.strictEqual(list.tail.value, 'Three');
      assert.strictEqual(list.length, 3);
    });
  });

  describe('#pop()', function () {
    beforeEach(function () {
      list.push('One');
      list.push('Two');
      list.push('Three');
    });

    it('can pop last of 3 values', function () {
      assert.strictEqual(list.pop(), 'Three');
      assert.strictEqual(list.tail.value, 'Two');
      assert.strictEqual(list.length, 2);
    });

    it('can pop last of 2 values', function () {
      list.pop();

      assert.strictEqual(list.pop(), 'Two');
      assert.strictEqual(list.tail.value, 'One');
      assert.strictEqual(list.length, 1);
    });

    it('can pop only value', function () {
      list.pop();
      list.pop();

      assert.strictEqual(list.pop(), 'One');
      assert.strictEqual(list.head, undefined);
      assert.strictEqual(list.tail, undefined);
      assert.strictEqual(list.length, 0);
    });
  });

  describe('#shift()', function () {
    it('can shift first of three values', function () {
      list.push('One');
      list.push('Two');
      list.push('Three');

      assert.strictEqual(list.shift(), 'One');
      assert.strictEqual(list.head.value, 'Two');
    });

    it('can shift only value', function () {
      list.push('One');

      assert.strictEqual(list.shift(), 'One');
      assert.strictEqual(list.head, undefined);
    });
  });

  describe('#unshift()', function () {
    it('can unshift first value', function () {
      assert.strictEqual(list.unshift('One'), list);
      assert.strictEqual(list.head.value, 'One');
      assert.strictEqual(list.tail.value, 'One');
      assert.strictEqual(list.length, 1);
    });

    it('can unshift second value', function () {
      list.unshift('One');

      assert.strictEqual(list.unshift('Two'), list);
      assert.strictEqual(list.head.value, 'Two');
      assert.strictEqual(list.head.next.value, 'One');
      assert.strictEqual(list.tail.value, 'One');
      assert.strictEqual(list.length, 2);
    });

    it('can unshift third value', function () {
      list.unshift('One');
      list.unshift('Two');

      assert.strictEqual(list.unshift('Three'), list);
      assert.strictEqual(list.head.value, 'Three');
      assert.strictEqual(list.head.next.value, 'Two');
      assert.strictEqual(list.tail.value, 'One');
      assert.strictEqual(list.length, 3);
    });
  });

  describe('#get()', function () {
    beforeEach(function () {
      list.push('One');
      list.push('Two');
      list.push('Three');
    });

    it('can get 1st of 3 values', function () {
      assert.strictEqual(list.get(0), 'One');
    });

    it('can get 2nd of 3 values', function () {
      assert.strictEqual(list.get(1), 'Two');
    });

    it('can get 3rd of 3 values', function () {
      assert.strictEqual(list.get(2), 'Three');
    });

    it('undefined for 4th of 3 values', function () {
      assert.strictEqual(list.get(3), undefined);
    });
  });

  describe('#set()', function () {
    beforeEach(function () {
      list.push('One');
      list.push('Two');
      list.push('Three');
    });

    it('can set value in index 1 of 3 values', function () {
      const index = 1;
      const value = 'Two';
      assert.strictEqual(list.set(index, value), true);
      assert.strictEqual(list.get(index), value);
    });
  });

  describe('#insert()', function () {
    beforeEach(function () {
      list.push('One');
      list.push('Three');
    });

    it('can insert in index 0 of 2 values', function () {
      const index = 0;
      const value = 'Two';
      assert.strictEqual(list.insert(index, value), true);
      assert.strictEqual(list.get(index), value);
    });

    it('can insert in index 1 of 2 values', function () {
      const index = 1;
      const value = 'Two';
      assert.strictEqual(list.insert(index, value), true);
      assert.strictEqual(list.get(index), value);
    });

    it('can insert in index 2 of 2 values', function () {
      const index = 2;
      const value = 'Two';
      assert.strictEqual(list.insert(index, value), true);
      assert.strictEqual(list.get(index), value);
    });

    it('cannot insert in index 3 of 2 values', function () {
      const index = 3;
      const value = 'Two';
      assert.strictEqual(list.insert(index, value), false);
      assert.strictEqual(list.get(index), undefined);
    });
  });

  describe('#remove()', function () {
    beforeEach(function () {
      list.push('One');
      list.push('Two');
      list.push('Three');
    });

    it('can remove from index 0 of 3 values', function () {
      assert.strictEqual(list.remove(0), 'One');
      assert.strictEqual(list.length, 2);
    });

    it('can remove from index 1 of 3 values', function () {
      assert.strictEqual(list.remove(1), 'Two');
      assert.strictEqual(list.length, 2);
    });

    it('can remove from index 2 of 3 values', function () {
      assert.strictEqual(list.remove(2), 'Three');
      assert.strictEqual(list.length, 2);
    });

    it('can remove 3 nodes from top of 3 values', function () {
      assert.strictEqual(list.remove(0), 'One');
      assert.strictEqual(list.remove(0), 'Two');
      assert.strictEqual(list.remove(0), 'Three');
      assert.strictEqual(list.length, 0);
    });

    it('can remove 3 nodes from bottom of 3 values', function () {
      assert.strictEqual(list.remove(2), 'Three');
      assert.strictEqual(list.remove(1), 'Two');
      assert.strictEqual(list.remove(0), 'One');
      assert.strictEqual(list.length, 0);
    });

    it('cannot remove from index 3 of 3 values', function () {
      assert.strictEqual(list.remove(3), undefined);
      assert.strictEqual(list.length, 3);
    });
  });
});
