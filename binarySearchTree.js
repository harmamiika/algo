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
      let currentNode = root;
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
}

var tree = new BinarySearchTree();
tree.root = new Node(19);
tree.root.right = new Node(15);
tree.rootl.left = new Node(69);
