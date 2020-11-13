/**
 * Represents a data node with a link to next node.
 * Used in singly linked list.
 */
module.exports = class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
}
