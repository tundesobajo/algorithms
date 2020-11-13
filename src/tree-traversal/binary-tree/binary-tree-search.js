const Tree = require('../../data-structure/tree/binary-tree');
const Queue = require('../../data-structure/abstract/queue');

/**
 * Traverse the tree in breath first search order.
 * 
 * @param {Tree} tree Tree to traverse
 * 
 * @returns {Array} An array of values in the order they were traversed
 */
exports.binaryTreeBreathFirstSearch = function (tree) {
  if (!tree.root) {
    return [];
  }

  const data = [];
  const queue = new Queue();

  queue.enqueue(tree.root);

  while (queue.size) {
    const node = queue.dequeue();
    const { left, right } = node;

    data.push(node.value);

    if (left) {
      queue.enqueue(left);
    }

    if (right) {
      queue.enqueue(right);
    }
  }

  return data;
};

/**
 * Traverse the tree in in-order depth first search order.
 * Useful for returning values in ascending order.
 * 
 * @param {Tree} tree Tree to traverse
 * 
 * @returns {Array} An array of values ordered from lowest to highest
 */
exports.binaryTreeDepthFirstInOrderSearch = function (tree) {
  const result = [];

  function traverse(node) {
    if (node) {
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    }
  }

  traverse(tree.root);

  return result;
};

/**
 * Traverse the tree in post-order depth first search order.
 * 
 * @param {Tree} tree Tree to traverse
 * 
 * @returns {Array} An array of values in the order they were traversed
 */
exports.binaryTreeDepthFirstPostOrderSearch = function (tree) {
  const result = [];

  function traverse(node) {
    if (node) {
      traverse(node.left);
      traverse(node.right);
      result.push(node.value);
    }
  }

  traverse(tree.root);

  return result;
};

/**
 * Traverse the tree in pre order depth first search order.
 * Can be used to flatten or serialize a tree. 
 * 
 * @param {Tree} tree Tree to traverse
 * 
 * @returns {Array} An array of values in the order they were traversed
 */
exports.binaryTreeDepthFirstPreOrderSearch = function (tree) {
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
