class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const result = [this.root];

    while (result.length) {
      const node = result.shift();
      result.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const result = [this.root];

    while (result.length) {
      const node = result.shift();
      result.unshift(...node.children);
      fn(node);
    }
  }
}
