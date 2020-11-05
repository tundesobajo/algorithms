const Node = require('../data-structure/tree-node');
const Tree = require('../data-structure/tree');

/**
 * Convert a nested array to a tree.
 * 
 * @param {Array} arr Array to be converted to a tree
 * 
 * @returns {Tree} Converted tree
 */
module.exports = function arrayToTree(arr) {
  function getNode(data) {
    if (data === undefined) {
      return data;
    }

    if (!(Array.isArray(data) && data.length)) {
      return new Node(data);
    }

    const parent = data[0];
    const children = data[1];

    const node = new Node(parent);

    if (Array.isArray(children)) {
      node.left = getNode(children[0]);
      node.right = getNode(children[1]);
    }

    return node;
  }

  const tree = new Tree();
  tree.root = getNode(arr);

  return tree;
}
