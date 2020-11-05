const Node = require('./tree-node');
/**
 * Tree (BST) data structure.
 * 
 * A tree must have only one root.
 */
module.exports = class Tree {
  constructor() {
    /**
     * @type {Node|undefined} Root node
     */
    this.root = undefined;
  }
}
