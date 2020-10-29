const { expect } = require('chai');
const DoublyLinkedList = require('./doubly-linked-list');

describe('Doubly Linked List', function () {
  let list;
  beforeEach(function () {
    list = new DoublyLinkedList();
  });

  describe('#push()', function () {
    it('can push first value', function () {
      expect(list.push('One')).to.equal(list);
      expect(list.head.value).to.equal('One');
      expect(list.tail.value).to.equal('One');
      expect(list.length).to.equal(1);
    });

    it('can push second value', function () {
      list.push('One');

      expect(list.push('Two')).to.equal(list);
      expect(list.head.next.value).to.equal('Two');
      expect(list.tail.value).to.equal('Two');
      expect(list.length).to.equal(2);
    });

    it('can push third value', function () {
      list.push('One');
      list.push('Two');

      expect(list.push('Three')).to.equal(list);
      expect(list.head.next.next.value).to.equal('Three');
      expect(list.tail.value).to.equal('Three');
      expect(list.length).to.equal(3);
    });
  });

  describe('#pop()', function () {
    beforeEach(function () {
      list.push('One');
      list.push('Two');
      list.push('Three');
    });

    it('can pop last of 3 values', function () {
      expect(list.pop()).to.equal('Three');
      expect(list.tail.value).to.equal('Two');
      expect(list.length).to.equal(2);
    });

    it('can pop last of 2 values', function () {
      list.pop();

      expect(list.pop()).to.equal('Two');
      expect(list.tail.value).to.equal('One');
      expect(list.length).to.equal(1);
    });

    it('can pop only value', function () {
      list.pop();
      list.pop();

      expect(list.pop()).to.equal('One');
      expect(list.head).to.be.undefined;
      expect(list.tail).to.be.undefined;
      expect(list.length).to.equal(0);
    });
  });

  describe('#shift()', function () {
    it('can shift first of three values', function () {
      list.push('One');
      list.push('Two');
      list.push('Three');

      expect(list.shift()).to.equal('One');
      expect(list.head.value).to.equal('Two');
    });

    it('can shift only value', function () {
      list.push('One');

      expect(list.shift()).to.equal('One');
      expect(list.head).to.be.undefined;
    });
  });

  describe('#unshift()', function () {
    it('can unshift first value', function () {
      expect(list.unshift('One')).to.equal(list);
      expect(list.head.value).to.equal('One');
      expect(list.tail.value).to.equal('One');
      expect(list.length).to.equal(1);
    });

    it('can unshift second value', function () {
      list.unshift('One');

      expect(list.unshift('Two')).to.equal(list);
      expect(list.head.value).to.equal('Two');
      expect(list.head.next.value).to.equal('One');
      expect(list.tail.value).to.equal('One');
      expect(list.length).to.equal(2);
    });

    it('can unshift third value', function () {
      list.unshift('One');
      list.unshift('Two');

      expect(list.unshift('Three')).to.equal(list);
      expect(list.head.value).to.equal('Three');
      expect(list.head.next.value).to.equal('Two');
      expect(list.tail.value).to.equal('One');
      expect(list.length).to.equal(3);
    });
  });

  describe('#get()', function () {
    beforeEach(function () {
      list.push('One');
      list.push('Two');
      list.push('Three');
    });

    it('can get 1st of 3 values', function () {
      expect(list.get(0)).to.equal('One');
    });

    it('can get 2nd of 3 values', function () {
      expect(list.get(1)).to.equal('Two');
    });

    it('can get 3rd of 3 values', function () {
      expect(list.get(2)).to.equal('Three');
    });

    it('undefined for 4th of 3 values', function () {
      expect(list.get(3)).to.be.undefined;
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
      expect(list.set(index, value)).to.be.true;
      expect(list.get(index)).to.equal(value);
    });
  });

  describe('#insert()', function () {
    beforeEach(function () {
      list.push('One');
      list.push('Three');
    });

    it('can insert in index 0 of 2 values', function () {
      const value = 'Two';
      expect(list.insert(0, value)).to.be.true;
      expect(list.shift()).to.equal(value);
      expect(list.shift()).to.equal('One');
    });

    it('can insert in index 1 of 2 values', function () {
      const index = 1;
      const value = 'Two';
      expect(list.insert(index, value)).to.be.true;
      expect(list.get(index)).to.equal(value);
    });

    it('can insert in index 2 of 2 values', function () {
      const value = 'Two';
      expect(list.insert(2, value)).to.be.true;
      expect(list.pop()).to.equal(value);
      expect(list.pop()).to.equal('Three');
    });

    it('cannot insert in index 3 of 2 values', function () {
      const index = 3;
      const value = 'Two';
      expect(list.insert(index, value)).to.be.false;
      expect(list.get(index)).to.be.undefined;
    });
  });

  describe('#remove()', function () {
    beforeEach(function () {
      list.push('One');
      list.push('Two');
      list.push('Three');
    });

    it('can remove from index 0 of 3 values', function () {
      expect(list.remove(0)).to.equal('One');
      expect(list.length).to.equal(2);
    });

    it('can remove from index 1 of 3 values', function () {
      expect(list.remove(1)).to.equal('Two');
      expect(list.length).to.equal(2);
    });

    it('can remove from index 2 of 3 values', function () {
      expect(list.remove(2)).to.equal('Three');
      expect(list.length).to.equal(2);
    });

    it('can remove 3 nodes from top of 3 values', function () {
      expect(list.remove(0)).to.equal('One');
      expect(list.remove(0)).to.equal('Two');
      expect(list.remove(0)).to.equal('Three');
      expect(list.length).to.equal(0);
    });

    it('can remove 3 nodes from bottom of 3 values', function () {
      expect(list.remove(2)).to.equal('Three');
      expect(list.remove(1)).to.equal('Two');
      expect(list.remove(0)).to.equal('One');
      expect(list.length).to.equal(0);
    });

    it('cannot remove from index 3 of 3 values', function () {
      expect(list.remove(3)).to.be.undefined;
      expect(list.length).to.equal(3);
    });
  });

  describe('#reverse', function () {
    it('can reverse a list of 0 values', function () {
      expect(list.reverse()).to.equal(list);
    });

    it('can reverse a list of 1 value', function () {
      list.push('One');

      expect(list.reverse()).to.equal(list);
      expect(list.length).to.equal(1);
      expect(list.head.value).to.equal('One');
    });

    it('can reverse a list of 2 values', function () {
      list.push('One');
      list.push('Two');

      expect(list.reverse()).to.equal(list);
      expect(list.length).to.equal(2);
      expect(list.head.value).to.equal('Two');
      expect(list.tail.value).to.equal('One');
    });

    it('can reverse a list of 3 values', function () {
      list.push('One');
      list.push('Two');
      list.push('Three');

      expect(list.reverse()).to.equal(list);
      expect(list.length).to.equal(3);
      expect(list.head.value).to.equal('Three');
      expect(list.get(1)).to.equal('Two');
      expect(list.tail.value).to.equal('One');
    });
  });
});
