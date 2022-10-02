var isValidBST = function (root) {
  function valid(node, left, right) {
    if (!node) return true;
    if (!(node.val < right && node.val > left)) return false;
    else
      return (
        valid(node.left, left, node.val) && valid(node.right, node.val, right)
      );
  }
  return valid(root, -Infinity, Infinity);
};
