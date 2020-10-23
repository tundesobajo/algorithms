const Node = require('./node');
/**
 * Singly linked list
 */
module.exports = class SinglyLinkedList {
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
   * @returns {this} The SinglyLinkedList
   */
  push(value) {
    const node = new Node(value);

    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }

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

    if (this.length > 1) {
      let current = this.head;
      let newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      newTail.next = undefined;
    } else {
      this.head = undefined;
      this.tail = undefined;
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

    if (this.length > 1) {
      this.head = this.head.next;
    } else {
      this.head = undefined;
      this.tail = undefined;
    }

    this.length -= 1;

    return value;
  }

  /**
   * Add a value onto the head of the list
   * 
   * @param {any} value Value to add
   * 
   * @returns {this} The SinglyLinkedList
   */
  unshift(value) {
    const node = new Node(value);

    if (this.head) {
      node.next = this.head;
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
    if (this.length === 0 || index < 0 || index >= this.length) {
      return undefined;
    }

    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
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

    let node = this.head;
    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = node;
      this.head = newNode;
    } else {
      for (let i = 1; i < index; i++) {
        node = node.next;
      }
      newNode.next = node.next;
      node.next = newNode;
    }

    if (index === this.length) {
      this.tail = newNode;
    }

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
    if (this.length === 0 || index < 0 || index >= this.length) {
      return undefined;
    }

    let prev;
    let node = this.head;

    if (index === 0) {
      this.head = node.next;
    } else {
      prev = this.getNode(index - 1);
      node = prev.next;
      prev.next = node.next;
    }

    if (index === this.length) {
      this.tail = prev;
    }

    this.length -= 1;

    return node.value;
  }

  /**
   * Function to reverse the order of nodes in list
   * 
   * @returns {this} The SinglyLinkedList
   */
  reverse() {
    let node = this.head;
    let { next } = node;
    while (next) {
      const prev = node;
      node = next;
      next = next.next;
      node.next = prev;
    }
    [this.head, this.tail] = [this.tail, this.head];

    return this;
  }
}
