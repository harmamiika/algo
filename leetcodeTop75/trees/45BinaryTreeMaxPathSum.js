// O(n)
// O(logn)

var maxPathSum = function (root) {
  let res = [-Infinity];
  // return max path sum without splitting
  function dfs(root) {
    if (!root) return 0;

    let leftMax = dfs(root.left);
    let rightMax = dfs(root.right);
    leftMax = Math.max(leftMax, 0);
    rightMax = Math.max(rightMax, 0);

    // compute max path sum WITH split
    // AKA alaoksan max ilman yläosaa
    res[0] = Math.max(res[0], root.val + leftMax + rightMax);

    // return without a split
    return root.val + Math.max(leftMax, rightMax);
  }

  dfs(root);

  return res[0];
};
