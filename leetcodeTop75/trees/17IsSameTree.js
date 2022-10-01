// O(p + q)

var isSameTree = function (p, q) {
  if (!p && !q) return true;
  else if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};
