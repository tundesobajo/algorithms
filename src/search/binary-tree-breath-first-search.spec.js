const { expect } = require('chai');
const Tree = require('../data-structure/tree');
const arrayToTree = require('../utils/array-to-tree');
const binaryTreeBreathFirstSearch = require('./binary-tree-breath-first-search');

describe('Breath First Tree Search', function () {
  it('returns []', function () {
    const tree = new Tree();
    expect(binaryTreeBreathFirstSearch(tree)).to.be.empty;
  });

  it('returns [5]', function () {
    const tree = arrayToTree([5]);
    expect(binaryTreeBreathFirstSearch(tree)).to.have.members([5]);
  });

  it('returns [5, 6, 7]', function () {
    const tree = arrayToTree([5, [6, 7]]);
    expect(binaryTreeBreathFirstSearch(tree)).to.have.ordered.members([5, 6, 7]);
  });

  it('returns [5, 6, 7, 8, 9, 10, 11]', function () {
    const tree = arrayToTree([5, [[6, [8, 9]], [7, [10, 11]]]]);
    expect(binaryTreeBreathFirstSearch(tree)).to.have.ordered.members([5, 6, 7, 8, 9, 10, 11]);
  });
});
