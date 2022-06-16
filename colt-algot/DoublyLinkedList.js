class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      poppedNode.prev = null;
      // clean off links in popped node
    }
    this.length--;
    return poppedNode;
  }

  // aggressive like the pokemon attack
  shift() {
    if (!this.head) return undefined;
    const shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(position) {
    if (position > this.length || position < 0) return undefined;
    let currentNode;
    if (this.length / 2 > position) {
      currentNode = this.head;
      let currentPos = 0;
      while (currentPos !== position) {
        currentNode = currentNode.next;
        currentPos++;
      }
    } else if (this.length / 2 <= position) {
      currentNode = this.tail;
      let currentPos = this.length - 1;
      while (currentPos > position) {
        currentNode = currentNode.prev;
        currentPos--;
      }
    }
    return currentNode;
  }

  set(position, val) {
    const node = this.get(position);
    if (node) {
      // kiinnostavaa ja väsyneelle sinulle ei-itsestäänselvää:
      // node referenssi on siis sama kuin listan valuen - ei duplikaatti siitä
      node.val = val;
      return true;
    } else return false;
  }

  // huom push yks isompaan kuin length on ok - tai siis lengthiin on ok
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.length++;
      return !!this.unshift(val);
    } else if (index === this.length) {
      this.length++;
      return !!this.push(val);
    }
    const indexPreviousNode = this.get(index - 1);
    const newNode = new Node(val);
    const afterNode = indexPreviousNode.next;
    indexPreviousNode.next = newNode;
    newNode.prev = indexPreviousNode;
    afterNode.prev = newNode;
    newNode.next = afterNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) this.length--;
    if (index === 0) {
      this.length--;
      return this.shift();
    } else if (index === this.length) {
      this.length--;
      return this.pop();
    }
    const node = this.get(index);
    const nextNode = node.next;
    const previousNode = node.prev;
    previousNode.next = nextNode;
    nextNode.prev = previousNode;

    this.length--;
    (node.prev = null), (node.next = null);
    return node;
  }
}

const list = new DoublyLinkedList();
list.push('miika');
list.unshift('otso');

console.log(list.get(1));
list.set(1, 'pel');
list.push('sanna');
list.insert(1, 'jonne');
list.remove(1);
console.log(list);
