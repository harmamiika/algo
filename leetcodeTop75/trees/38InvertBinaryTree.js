// Recursive is ofc not best performance

var invertTree = function (root) {
  if (!root) return null;
  const temp = root.right;
  root.right = root.left;
  root.left = temp;
  invertTree(root.right);
  invertTree(root.left);
  return root;
};
