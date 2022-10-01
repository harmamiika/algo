// bfs
var maxDepth = function (root) {
  if (!root) return 0;
  function traverse(node, currentDepth) {
    if (!node) return currentDepth;
    currentDepth++;
    return Math.max(
      traverse(node.left, currentDepth),
      traverse(node.right, currentDepth)
    );
  }
  return Math.max(traverse(root.left, 1), traverse(root.right, 1));
};

var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
x;
// BFS POSSBLE WITH QUEUE

// DFS WITH STACK
var maxDepth = function (root) {
  if (!root) return 0;

  let max = 1;
  const stack = [[root, 1]];
  while (stack.length) {
    const current = stack.pop();
    const node = current[0];
    const depth = current[1];

    // addaa maxin vaan, jossei null
    if (node) {
      max = Math.max(max, depth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }

  return max;
};

// queue
var maxDepth = function (root) {
  if (!root) return 0;

  let max = 1;
  const stack = [[root, 1]];
  while (stack.length) {
    const current = stack.pop();
    const node = current[0];
    const depth = current[1];

    if (node) {
      max = Math.max(max, depth);
      stack.unshift([node.left, depth + 1]);
      stack.unshift([node.right, depth + 1]);
    }
  }

  return max;
};
