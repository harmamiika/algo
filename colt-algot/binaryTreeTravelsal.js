class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  TraverseBreadthFirst() {
    const queue = [];
    const values = [];
    let currentNode = null;
    queue.push(this.root);
    while (queue.length > 0) {
      currentNode = queue.shift();
      values.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return values;
  }
}

const tree = new BinaryTree();
tree.root = new Node(113);
