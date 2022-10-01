// O(n * m)

var isSubtree = function (root, subRoot) {
  if (!root) return false;
  if (subRoot.val === root.val && isSameTree(subRoot, root)) return true;
  return isSubtree(root.right, subRoot) || isSubtree(root.left, subRoot);
};

function isSameTree(t1, t2) {
  if (!t1 && !t2) return true;
  else if (t1 && t2 && t1.val === t2.val)
    return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
  else return false;
}
