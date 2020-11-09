const Tree = require('../data-structure/binary-tree');
const Queue = require('../data-structure/queue');

/**
 * Traverse the tree in pre order depth first search order.
 * 
 * @param {Tree} tree Tree to traverse
 * 
 * @returns {Array} An array of values in the order they were traversed
 */
module.exports = function binaryTreeDepthFirstPreOrderSearch(tree) {
  const result = [];

  function traverse(node) {
    if (node) {
      result.push(node.value);
      traverse(node.left);
      traverse(node.right);
    }
  }

  traverse(tree.root);

  return result;
};
