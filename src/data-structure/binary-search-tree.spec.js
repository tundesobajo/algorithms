const { expect } = require('chai');
const BinarySearchTree = require('./binary-search-tree');

describe('Binary Search Tree', function () {
  let tree;

  beforeEach(function () {
    tree = new BinarySearchTree();
  });

  describe('#insert', function () {
    it('inserts 5', function () {
      expect(tree.insert(5)).to.eql(tree);
      expect(tree.root.value).to.equal(5);
    });

    it('inserts 5, 4 and 3', function () {
      [5, 4, 3].forEach(val => tree.insert(val));

      expect(tree.root.left.value).to.equal(4);
      expect(tree.root.left.left.value).to.equal(3);
    });

    it('inserts 5, 6 and 7', function () {
      [5, 6, 7].forEach(val => tree.insert(val));

      expect(tree.root.right.value).to.equal(6);
      expect(tree.root.right.right.value).to.equal(7);
    });

    it('inserts 5, 7 and 6', function () {
      [5, 7, 6].forEach(val => tree.insert(val));

      expect(tree.root.right.value).to.equal(7);
      expect(tree.root.right.left.value).to.equal(6);
    });

    it('ignores repeated number when inserting 5, 4, 5', function () {
      [5, 4].forEach(val => tree.insert(val));

      expect(tree.insert(5)).to.be.undefined;
    });
  });

  describe('#contains', function () {
    beforeEach(function () {
      [5, 9, 4, 2, 3, 8, 7, 6, 1, 10].forEach(val => tree.insert(val));
    });

    it('finds 1 in tree', function () {
      expect(tree.contains(1)).to.be.true;
    });

    it('finds 6 in tree', function () {
      expect(tree.contains(6)).to.be.true;
    });

    it('does not find 0 in tree', function () {
      expect(tree.contains(0)).to.be.false;
    });
  });
});
