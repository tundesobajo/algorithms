const { expect } = require('chai');
const BinaryTree = require('../data-structure/binary-tree');
const arrayToTree = require('../utils/array-to-tree');
const binaryTreeDepthFirstPreOrderSearch = require('./binary-tree-depth-first-pre-order-search');

describe('Breath First Tree Search', function () {
  it('returns []', function () {
    const tree = new BinaryTree();
    expect(binaryTreeDepthFirstPreOrderSearch(tree)).to.be.empty;
  });

  it('returns [5]', function () {
    const tree = arrayToTree([5]);
    const result = [5];
    expect(binaryTreeDepthFirstPreOrderSearch(tree)).to.have.members(result);
  });

  it('returns [5, 6, 7]', function () {
    const tree = arrayToTree([5, [6, 7]]);
    const result = [5, 6, 7];
    expect(binaryTreeDepthFirstPreOrderSearch(tree)).to.have.ordered.members(result);
  });

  it('returns [5, 6, 8, 9, 7, 10, 11]', function () {
    const tree = arrayToTree([5, [[6, [8, 9]], [7, [10, 11]]]]);
    const result = [5, 6, 8, 9, 7, 10, 11];
    expect(binaryTreeDepthFirstPreOrderSearch(tree)).to.have.ordered.members(result);
  });
});
