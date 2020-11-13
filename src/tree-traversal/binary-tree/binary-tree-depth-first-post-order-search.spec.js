const { expect } = require('chai');
const BinaryTree = require('../../data-structure/tree/binary-tree');
const arrayToTree = require('../../utils/array-to-tree');
const { binaryTreeDepthFirstPostOrderSearch } = require('./binary-tree-search');

describe('Breath First Tree Search', function () {
  it('returns []', function () {
    const tree = new BinaryTree();
    expect(binaryTreeDepthFirstPostOrderSearch(tree)).to.be.empty;
  });

  it('returns [5]', function () {
    const tree = arrayToTree([5]);
    const result = [5];
    expect(binaryTreeDepthFirstPostOrderSearch(tree)).to.have.members(result);
  });

  it('returns [6, 7, 5]', function () {
    const tree = arrayToTree([5, [6, 7]]);
    const result = [6, 7, 5];
    expect(binaryTreeDepthFirstPostOrderSearch(tree)).to.have.ordered.members(result);
  });

  it('returns [8, 9, 6, 10, 11, 7, 5]', function () {
    const tree = arrayToTree([5, [[6, [8, 9]], [7, [10, 11]]]]);
    const result = [8, 9, 6, 10, 11, 7, 5];
    expect(binaryTreeDepthFirstPostOrderSearch(tree)).to.have.ordered.members(result);
  });
});
