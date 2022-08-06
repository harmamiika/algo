// STACk
// voi olla vain array

const stack = [];

stack.push('123');
stack.pop();

const stack2 = [];

stack.unshift('132');
stack.shift();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack3 {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  // can be shorter
  pop() {
    if (!this.first) return null;
    const poppedNode = this.first;
    if (this.size === 1) {
      (this.first = null), (this.last = null);
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return poppedNode;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  // shift
  dequeue() {
    if (!this.first) return null;

    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  // identtinen stackin popin kanssa
}
