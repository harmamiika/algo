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
