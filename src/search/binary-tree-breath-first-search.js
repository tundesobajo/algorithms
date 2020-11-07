const Tree = require('../data-structure/tree');
const Queue = require('../data-structure/queue');

/**
 * Traverse the tree in breath first search order.
 * 
 * @param {Tree} tree Tree to traverse
 * 
 * @returns {Array} An array of values in the order they were traversed
 */
module.exports = function binaryTreeBreathFirstSearch(tree) {
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
