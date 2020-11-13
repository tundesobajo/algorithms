const { expect } = require('chai');
const BinaryTree = require('../../data-structure/tree/binary-tree');
const arrayToTree = require('../../utils/array-to-tree');
const { binaryTreeDepthFirstInOrderSearch } = require('./binary-tree-search');

describe('Breath First Tree Search', function () {
  it('returns []', function () {
    const tree = new BinaryTree();
    expect(binaryTreeDepthFirstInOrderSearch(tree)).to.be.empty;
  });

  it('returns [5]', function () {
    const tree = arrayToTree([5]);
    const result = [5];
    expect(binaryTreeDepthFirstInOrderSearch(tree)).to.have.members(result);
  });

  it('returns [6, 5, 7]', function () {
    const tree = arrayToTree([5, [6, 7]]);
    const result = [6, 5, 7];
    expect(binaryTreeDepthFirstInOrderSearch(tree)).to.have.ordered.members(result);
  });

  it('returns [8, 6, 9, 5, 10, 7, 11]', function () {
    const tree = arrayToTree([5, [[6, [8, 9]], [7, [10, 11]]]]);
    const result = [8, 6, 9, 5, 10, 7, 11];
    expect(binaryTreeDepthFirstInOrderSearch(tree)).to.have.ordered.members(result);
  });
});
