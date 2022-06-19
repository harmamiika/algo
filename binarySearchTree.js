class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value === newNode) return undefined;
        if (currentNode.value > newNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.value < newNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  contains(value) {
    if (this.root === null) return false;
    const currentNode = this.root;
    while (true) {
      if (currentNode.value === value) return true;
      else if (currentNode.value > value) {
        if (!currentNode.right) return false;
        else currentNode = currentNode.right;
      } else if (currentNode.value < value) {
        if (!currentNode.left) return false;
        else currentNode = currentNode.left;
      }
    }
  }

  traverseBreadthFirst() {
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

  traverseDepthFirstPreOrder() {
    const visited = [];
    const traverse = (node) => {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }

  traverseDepthFirstPostOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    };
    traverse(this.root);
    return visited;
  }

  // returnaa bstn järjestysessä
  traverseDepthFirstInOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }

  // space kompleksisuudessa voi olla eroa - time aina sama
  // depth first on parempi leveissä puissa - yleensä
  // bredth first parempi pitkissä puissa - rarempi
}

var tree = new BinarySearchTree();
tree.root = new Node(19);
tree.root.right = new Node(69);
tree.root.left = new Node(15);
tree.insert(70);
tree.insert(11);

console.log(tree.traverseBreadthFirst());
console.log(tree.traverseDepthFirstPreOrder());
console.log(tree.traverseDepthFirstInOrder());
