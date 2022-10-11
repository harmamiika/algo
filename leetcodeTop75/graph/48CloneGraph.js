// o(n)
// o(edges + vertices)

var cloneGraph = function (node, seen = new Map()) {
  if (node === null) return null;
  if (seen.has(node)) return seen.get(node);
  // returning any node in the graph is fine
  return dfs(node, seen);
};

function dfs(node, seen) {
  const clone = new Node(node.val);
  seen.set(node, clone);

  for (let neighbor of node.neighbors) {
    const cloneNeighbor = cloneGraph(neighbor, seen);
    clone.neighbors.push(cloneNeighbor);
  }

  return clone;
}
