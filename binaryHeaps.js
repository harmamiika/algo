// heaps = trees
// MAX Binary heap = parent bigger than children, 2 nodes
// Priority queue on yleinen implementaatio, graph traversal myös

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
}

const heap = new BinaryHeap();
heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);

console.log(heap);
