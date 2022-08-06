// heaps = trees
// MAX Binary heap = parent bigger than children, 2 nodes
// Priority queue on yleinen implementaatio, graph traversal myös

// HEAP täyttyy aina riveittäin, vasemmalta

// voidaaaan storee arrayssa
// parentin child = 2n + 1, 2n + 2
// childin parent = Math.floor((n-1)/2)

class BinaryHeap {
  constructor() {
    this.values = [];
  }

  // add to end
  // bubble up
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    while (
      childIndex > 0 &&
      this.values[parentIndex] < this.values[childIndex]
    ) {
      const temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[childIndex];
      this.values[childIndex] = temp;
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let parentIndex = 0;
    const element = this.values[0];
    const length = this.values.length;

    while (true) {
      const leftChildIndex = 2 * parentIndex + 1;
      const rightChildIndex = 2 * parentIndex + 2;
      let leftChild, rightChild;
      let swapIndex = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swapIndex === null && rightChild > element) ||
          (swapIndex !== null && rightChild > leftChild)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;

      this.values[parentIndex] = this.values[swapIndex];
      this.values[swapIndex] = element;
      parentIndex = swapIndex;
    }
  }
}

const heap = new BinaryHeap();
heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);

heap.extractMax();

console.log(heap);
