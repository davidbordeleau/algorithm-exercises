class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

   size() {
    let counter = 0
    let node = this.head;

    while (node){
      counter ++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head
  }

  getLast() {
    if (!this.head) {
      return null
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    if (this.head) {
      const lastNode = this.getLast();
      lastNode.next = new Node(data);
      return;
    }
    this.head = new Node(data);
  }

  getAt(num) {
    if (!this.head) {
      return null;
    }
    let counter = 0
    let node = this.head;

    while (node){
      if (counter === num){
        return node
      }
      counter ++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (index === 0 || !this.head) {
      this.insertFirst(data);
      return;
    }

    const previous = this.getAt(index -1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let counter = 0;
    let node = this.head;

    while (node) {
      fn(node, counter);
      node = node.next;
      counter ++;
    }
  }
}
