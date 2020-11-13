const { expect } = require('chai');
const BinarySearchTree = require('./binary-search-tree');

describe('Binary Search Tree', function () {
  let tree;

  describe('#constructor', function () {
    it('constructs tree from array [5, 9, 4, 2, 3, 8, 7, 6, 1, 10]', function () {
      const tree = new BinarySearchTree([5, 9, 4, 2, 3, 8, 7, 6, 1, 10]);

      const five = tree.root;
      expect(five.value).to.equal(5);

      const nine = five.right;
      expect(nine.value).to.equal(9);

      const four = five.left;
      expect(four.value).to.equal(4);

      const two = four.left;
      expect(two.value).to.equal(2);

      const three = two.right;
      expect(three.value).to.equal(3);

      const eight = nine.left;
      expect(eight.value).to.equal(8);

      const seven = eight.left;
      expect(seven.value).to.equal(7);

      const six = seven.left;
      expect(six.value).to.equal(6);

      const one = two.left;
      expect(one.value).to.equal(1);

      const ten = nine.right;
      expect(ten.value).to.equal(10);
    });
  });

  describe('#insert', function () {
    it('inserts 5', function () {
      tree = new BinarySearchTree();
      expect(tree.insert(5)).to.eql(tree);
      expect(tree.root.value).to.equal(5);
    });

    it('inserts 5, 4 and 3', function () {
      tree = new BinarySearchTree([5, 4, 3]);

      expect(tree.root.left.value).to.equal(4);
      expect(tree.root.left.left.value).to.equal(3);
    });

    it('inserts 5, 6 and 7', function () {
      tree = new BinarySearchTree([5, 6, 7]);

      expect(tree.root.right.value).to.equal(6);
      expect(tree.root.right.right.value).to.equal(7);
    });

    it('inserts 5, 7 and 6', function () {
      tree = new BinarySearchTree([5, 7, 6]);

      expect(tree.root.right.value).to.equal(7);
      expect(tree.root.right.left.value).to.equal(6);
    });

    it('ignores repeated number when inserting 5, 4, 5', function () {
      tree = new BinarySearchTree([5, 4]);

      expect(tree.insert(5)).to.be.undefined;
    });
  });

  describe('#contains', function () {
    beforeEach(function () {
      tree = new BinarySearchTree([5, 9, 4, 2, 3, 8, 7, 6, 1, 10]);
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
