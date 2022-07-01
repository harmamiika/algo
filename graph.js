// vertex = node
// edge = connection

// directed (->) - undirected (<->)
// weighted graph - edgeillä on value

// reprsent
// Adjacency list - adjacency matrix

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // voi tehdä myös whilellä ja removeEdgellä
  removeVertex(vertex) {
    for (let connection of this.adjacencyList[vertex]) {
      this.adjacencyList[connection].filter((v) => v !== vertex);
    }
    delete this.adjacencyList[vertex];
  }
}
