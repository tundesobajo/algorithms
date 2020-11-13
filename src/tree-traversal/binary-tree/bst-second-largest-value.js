const BinarySearchTree = require('../../data-structure/tree/binary-search-tree');
const BinaryTreeNode = require('../../data-structure/tree/binary-tree-node');

/**
 * Find node with the largest value.
 * This will always be the rightmost node.
 * 
 * @param {BinaryTreeNode} startNode Starting point of search
 * 
 * @returns {BinaryTreeNode} Node with largest value
 */
function largestNode(startNode) {
  let node = startNode;
  while (node.right) {
    node = node.right;
  }

  return node;
}

/**
 * Find the second largest value in a binary search tree.
 *       +---(3)-----------+
 *  +---(2)        +---(5)------------------+ 
 * (1)            (4)             +--------(9)
 *                           +---(6)---+
 *                          (7)       (8)
 * The right-most node in the example above is 9 making it the largest.
 * If 9 has a left node, then the second largest which is 8 in this
 * example is the largest node starting from the left of 9.
 * If 9 does not have a left node then the second largest is the
 * parent node of 9 which would be 5 in this example.
 * 
 * @param {BinarySearchTree} tree Tree to search
 * 
 * @returns {any} Largest value
 */
module.exports = function binarySearchTreeSecondLargestValue(tree) {
  const { left, right } = tree.root;
  if (!tree.root || !(left || right)) {
    throw new Error('Tree must have at least 2 nodes');
  }

  let parentOfLargest;
  let largest = tree.root;
  while (largest.right) {
    parentOfLargest = largest;
    largest = largest.right;
  }

  if (largest.left) {
    // If the node with the largest value has a left subtree,
    // then the second largest is in that left subtree.
    return largestNode(largest.left).value;
  } else {
    // If the node with the largest value does not have a left subtree
    // then it's parent node is the second largest.
    return parentOfLargest.value;
  }
}
