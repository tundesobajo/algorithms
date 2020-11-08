const Node = require('./binary-tree-node');
/**
 * Binary searct tree (BST) data structure.
 * 
 * A tree must have only one root.
 * A BST is always sorted. This means each node in the tree will
 * have a lower-valued left child and a higher valued right child.
 */
module.exports = class BinarySearchTree {
  constructor() {
    /**
     * @type {Node|undefined} Root node
     */
    this.root = undefined;
  }

  /**
   * Insert value into tree.
   * This implementation ignores repeated values;
   * 
   * @param {any} value Value to insert
   * 
   * @returns {this|undefined} Returns tree if successful or undefined
   */
  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let tmp = this.root;
    while (true) {
      if (value === tmp.value) {
        return undefined;
      }

      if (value < tmp.value) {
        if (tmp.left) {
          tmp = tmp.left;
        } else {
          tmp.left = node;
          return this;
        }
      }

      if (value > tmp.value) {
        if (tmp.right) {
          tmp = tmp.right;
        } else {
          tmp.right = node;
          return this;
        }
      }
    }
  }

  /**
   * Search for a value in tree.
   * 
   * @param {any} value Value to search for
   * 
   * @returns {boolean} Returns true if  found
   */
  contains(value) {
    if (!this.root) {
      return false;
    }

    let tmp = this.root;
    while (tmp) {
      if (value === tmp.value) {
        return true;
      }

      if (value < tmp.value) {
        tmp = tmp.left;
      } else {
        tmp = tmp.right;
      }
    }

    return false;
  }
}
