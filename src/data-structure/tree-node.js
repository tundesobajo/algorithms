/**
 * Represents a data node with links to both
 * left an right nodes.
 * Used in binary search trees.
 */
module.exports = class Node {
  /**
   * Create Node instance
   * 
   * @param {any} value Value of node
   */
  constructor(value) {
    /**
     * @type {any} Value of the node
     */
    this.value = value;
    /**
     * @type {Node|undefined} Left node
     */
    this.left = undefined;
    /**
     * @type {Node|undefined} Right node
     */
    this.right = undefined;
  }
}
