const Node = require('./doubly-linked-node');
/**
 * Doubly linked list
 */
module.exports = class DoublyLinkedList {
  constructor() {
    /**
     * @type {Node} First node
     */
    this.head = undefined;
    /**
     * @type {node} Last node
     */
    this.tail = undefined;
    /**
     * @type {number} Number of nodes
     */
    this.length = 0;
  }

  /**
   * Push a value onto the end of the list
   * 
   * @param {any} value Value to add
   * 
   * @returns {this} The DoublyLinkedList
   */
  push(value) {
    const node = new Node(value);

    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }

    node.prev = this.tail;
    this.tail = node;
    this.length += 1;

    return this;
  }

  /**
   * Pop a value from the end of the list
   * 
   * @returns {any} Value of popped node
   */
  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const { value } = this.tail;

    if (this.length === 1) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = undefined;
    }

    this.length -= 1;

    return value;
  }

  /**
   * Remove a value from the head of the list
   * 
   * @returns {any} Value of shifted node
   */
  shift() {
    if (this.length === 0) {
      return undefined;
    }

    const { value } = this.head;

    if (this.length === 1) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      this.head = this.head.next;
      this.head.prev = undefined;
    }

    this.length -= 1;

    return value;
  }

  /**
   * Add a value onto the head of the list
   * 
   * @param {any} value Value to add
   * 
   * @returns {this} The DoublyLinkedList
   */
  unshift(value) {
    const node = new Node(value);

    if (this.head) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length += 1;

    return this;
  }


  /**
   * Function to get a Node from the list
   * 
   * @param {number} index Index of Node to get
   * 
   * @returns {Node} Node in index
   */
  getNode(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let node;

    if (index < this.length / 2) {
      node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
    } else {
      node = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        node = node.prev;
      }
    }

    return node;
  }

  /**
   * Function to get an item from the list
   * 
   * @param {number} index Index of item to get
   * 
   * @returns {any} Value found in index
   */
  get(index) {
    const node = this.getNode(index);
    return node ? node.value : undefined;
  }

  /**
   * Function to set value of a node in specified index.
   * 
   * @param {number} index Index to set
   * @param {any} value Value to set
   * 
   * @returns {boolean} Indicates if value was set
   */
  set(index, value) {
    const node = this.getNode(index);

    if (node) {
      node.value = value;
      return true;
    }

    return false;
  }

  /**
   * Function to insert new value into list.
   * 
   * @param {number} index Index in which to insert value
   * @param {any} value Value to insert
   * 
   * @returns {bool} Indicates successful insert
   */
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === this.length) {
      return !!this.push(value);
    }

    if (index === 0) {
      return !!this.unshift(value);
    }

    const node = new Node(value);
    const prev = this.getNode(index - 1);

    node.prev = prev;
    node.next = prev.next;
    prev.next.prev = node;
    prev.next = node;

    this.length += 1;

    return true;
  }

  /**
   * Remove node from list
   * 
   * @param {number} index Index of node to remove
   * 
   * @returns {any} Value of removed node
   */
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    const prev = this.getNode(index - 1);
    const node = prev.next;

    prev.next = node.next;
    prev.next.next = prev;

    this.length -= 1;

    return node.value;
  }

  /**
   * Function to reverse the order of nodes in list
   * 
   * @returns {this} The DoublyLinkedList
   */
  reverse() {
    let node = this.head;
    while (node) {
      [node.next, node.prev] = [node.prev, node.next];
      node = node.prev;
    }
    [this.head, this.tail] = [this.tail, this.head];

    return this;
  }
}
