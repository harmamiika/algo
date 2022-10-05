var kthSmallest = function (root, k) {
  let stack = [];
  let n = 0;
  let cur = root;

  while (true) {
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    n++;
    if (n === k) return cur.val;
    cur = cur.right;
  }
};
