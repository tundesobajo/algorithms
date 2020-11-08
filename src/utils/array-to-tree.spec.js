const { expect } = require('chai');
const BinaryTree = require('../data-structure/binary-tree');
const arrayToTree = require('./array-to-tree');

describe('Array to Tree', function () {
  it('creates tree with 1', function () {
    const tree = arrayToTree(1);

    expect(tree).to.an.be.instanceof(BinaryTree);
  });

  it('creates tree with [1]', function () {
    const tree = arrayToTree([1, undefined]);

    expect(tree).to.an.be.instanceof(BinaryTree);
  });

  it('creates tree with [1, [2, 3]]', function () {
    const tree = arrayToTree([1, [2, 3]]);

    expect(tree.root.left.value).to.equal(2);
    expect(tree.root.right.value).to.equal(3);
  });

  it('creates tree with [1, [[2], [3]]]', function () {
    const tree = arrayToTree([1, [[2], [3]]]);

    expect(tree.root.left.value).to.equal(2);
    expect(tree.root.right.value).to.equal(3);
  });

  it('creates tree with [1, [[2, [4, 5]], 3]]', function () {
    const tree = arrayToTree([1, [[2, [4, 5]], 3]]);

    expect(tree.root.left.left.value).to.equal(4);
    expect(tree.root.left.right.value).to.equal(5);
  });

  it('creates tree with [1, [2, [3, [6, 7]]]]', function () {
    const tree = arrayToTree([1, [2, [3, [6, 7]]]]);

    expect(tree.root.right.left.value).to.equal(6);
    expect(tree.root.right.right.value).to.equal(7);
  });
});
