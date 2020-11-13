const { expect } = require('chai');
const BinarySearchTree = require('../../data-structure/tree/binary-search-tree');
const binarySearchTreeSecondLargestValue = require('./bst-second-largest-value');

describe('Binary Search Tree Second Largest Value', function () {
  describe('#binarySearchTreeSecondLargestValue', function () {
    it('returns 3 for [7, 3]', function () {
      const tree = new BinarySearchTree([7, 3]);
      expect(binarySearchTreeSecondLargestValue(tree)).to.equal(3);
    });

    it('returns 3 for [3, 7]', function () {
      const tree = new BinarySearchTree([3, 7]);
      expect(binarySearchTreeSecondLargestValue(tree)).to.equal(3);
    });

    it('returns 6 for [3, 7, 4, 6]', function () {
      const tree = new BinarySearchTree([3, 7, 4, 6]);
      expect(binarySearchTreeSecondLargestValue(tree)).to.equal(6);
    });
  });
});
