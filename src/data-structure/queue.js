const Node = require('./list/singly-linked-node');
/**
 * Queue (FIFO) data structure
 */
module.exports = class Queue {
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
   * Enqueue a value onto the end of the queue.
   * 
   * @param {any} value Value to add
   * 
   * @returns {number} Size of queue
   */
  enqueue(value) {
    const node = new Node(value);

    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.size += 1;

    return this.size;
  }

  /**
   * Dequeue a value from the top of the queue.
   * 
   * @returns {any} Value popped
   */
  dequeue() {
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
