const Node = require('./list/singly-linked-node');
/**
 * Stack (LIFO) data structure
 */
module.exports = class Stack {
  constructor() {
    /**
     * @type {Node} First node
     */
    this.first = undefined;
    /**
     * @type {node} Last node
     */
    this.last = undefined;
    /**
     * @type {number} Number of nodes
     */
    this.size = 0;
  }

  /**
   * Push a value onto the stack.
   * 
   * Although push is supposed to add to the end of a list,
   * We push onto the beginning of the stack to get (0n) time
   * with push and pop.
   * 
   * @param {any} value Value to add
   * 
   * @returns {number} Size of stack
   */
  push(value) {
    const node = new Node(value);

    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }

    this.size += 1;

    return this.size;
  }

  /**
   * Pop a value from the top of the stack.
   * 
   * @returns {any} Value popped
   */
  pop() {
    if (this.size === 0) {
      return undefined;
    }

    const { value } = this.first;

    if (this.size === 1) {
      this.first = undefined;
      this.last = undefined;
    } else {
      this.first = this.first.next;
    }

    this.size -= 1;

    return value;
  }
}
