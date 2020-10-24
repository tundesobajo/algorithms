/**
 * Represents a data node with links to both
 * previous an next nodes.
 * Used in doubly linked list.
 */
module.exports = class Node {
  constructor(value) {
    this.value = value;
    this.prev = undefined;
    this.next = undefined;
  }
}
