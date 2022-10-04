var kthSmallest = function (root, k) {
  let n = 0;
  const stack = [];
  let cur = root;

  while (cur !== null && stack.length) {
    while (cur !== null) {
      stack.push(cur.left);
      cur = cur.left;
    }
    cur = stack.pop();
    n += 1;
    if (n === k) return cur.val;
    cur = cur.right;
  }
};
