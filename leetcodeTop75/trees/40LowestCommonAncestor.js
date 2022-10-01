// O(logn)

// IN BST
var lowestCommonAncestor = function (root, p, q) {
  let curr = root;
  while (curr) {
    if (p.val > curr.val && q.val > curr.val) curr = curr.right;
    else if (p.val < curr.val && q.val < curr.val) curr = curr.left;
    // IF SPLIT => always LCA
    else return curr;
  }
};
