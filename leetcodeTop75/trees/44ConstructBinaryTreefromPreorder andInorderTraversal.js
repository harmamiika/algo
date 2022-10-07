// preorder traversal === YLHÄÄLTÄ alas, vasemmalta oikealle
// inorder traversal === vasemmalta oikealle, pohjalta alkaen aina => KS Kth smallest in bst

var buildTree = function (preorder, inorder) {
  if (!preorder || !inorder) return null;

  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(root);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder(0, mid));
  root.left = buildTree(preorder.slice(mid + 1), inorder(mid + 1));

  return root;
};
