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

  dfsRecursive(vertex) {
    const result = [];
    const visited = {};
    // Huom
    const adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      for (let adjacentVertex of adjacencyList[vertex]) {
        if (!visited[adjacentVertex]) {
          dfs(adjacentVertex);
        }
      }
    }
    dfs(vertex);

    return result;
  }

  dfsIterative(start) {
    const S = [];
    const result = [];
    const visited = {};
    let vertex;

    S.push(start);
    visited[start] = true;

    while (S.length > 0) {
      vertex = S.pop();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((adjacent) => {
        if (!visited[adjacent]) {
          visited[adjacent] = true;
          S.push(adjacent);
        }
      });
    }

    return result;
  }

  bfs(start) {
    const Q = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (Q.length) {
      currentVertex = Q.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((adjacent) => {
        if (!visited[adjacent]) {
          visited[adjacent] = true;
          Q.push(adjacent);
        }
      });
    }

    return result;
  }
}

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.dfsRecursive('A'));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
