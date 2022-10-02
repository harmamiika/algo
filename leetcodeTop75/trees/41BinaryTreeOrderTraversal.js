//BFT => O(n)

var levelOrder = function (root) {
  if (!root) return [];
  // traverse breadth first

  let res = [];
  let queue = [[root, 0]];
  let curr = null;
  while (queue.length) {
    curr = queue.pop();
    res[curr[1]] = [...(res[curr[1]] || []), curr[0]?.val];
    if (curr[0]?.left) queue.unshift([curr[0].left, curr[1] + 1]);
    if (curr[0]?.right) queue.unshift([curr[0].right, curr[1] + 1]);
  }
  return res;
};
