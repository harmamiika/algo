// OMa
// o(n)
var maxDepth = function (root, depth = 0) {
  if (!root) return depth;
  depth++;
  return Math.max(maxDepth(root.right, depth), maxDepth(root.left, depth));
};

2.0;
var maxDepth = function (root, depth = 0) {
  if (!root) return depth;
  return 1 + Math.max(maxDepth(root.right, depth), maxDepth(root.left, depth));
};
