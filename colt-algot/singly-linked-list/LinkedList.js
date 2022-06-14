// LINKED LIST
// head, tail, length
// nodes

// big pro - inserting a head is fast

// con. no random access, no indexes

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let previous = this.head;
    while (previous.next.next) {
      previous = previous.next;
    }
    const lastNode = previous.next;
    previous.next = undefined;
    list.tail = previous;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return lastNode;
  }

  // remove first node
  shift() {
    if (!this.head) return undefined;
    const head = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return head;
  }

  // add first node
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldHead = this.head;
      newNode.next = oldHead;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(position) {
    if (position > this.length || position < 0) return undefined;
    let counter = 0;
    let currentNode = this.head;
    while (counter < position) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  set(position, val) {
    const node = this.get(position);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(position, val) {
    if (position > this.length || position < 0) return false;
    else if (position === 0) this.unshift(val);
    else if (position === this.length) this.push(val);
    // tai sitten käytä vain get
    else {
      const newNode = new Node(val);
      let counter = 0;
      let currentNode = this.head;
      while (counter + 1 < position) {
        currentNode = currentNode.next;
        counter++;
      }
      let nextNode = currentNode.next;
      newNode.next = nextNode;
      currentNode.next = newNode;
      this.length++;
    }
    return true;
  }
}

var list = new SinglyLinkedList();

list.push('miika');
list.push('jassu');
list.push('otso');
list.push('plee');

list.pop();
list.shift();

list.unshift('sanna');

console.log(list.get(2));

list.insert(2, 'nalle');

console.log(list.get(2));

console.log(list, 'list');
