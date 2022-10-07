var serialize = function (root, res = []) {
  let res = [];

  function dfs(node) {
    if (!node) {
      res.push('N');
      return;
    }
    res.push(node.val.toString());
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return res.toString();
};

function deserialize(data) {
  let vals = data.slice(data.slice(1, data.length - 1)).split(',');
  let i = 0;

  function dfs() {
    if (vals[i] === 'N') {
      i++;
      return null;
    }
    const node = { val: vals[i], left: null, right: null };
    i++;
    node.left = dfs();
    node.right = dfs();
    return node;
  }

  return dfs;
}

// var serialize = function (root, res = []) {
//     if (!root) return res.push('N');
//     else res.push(root.val.toString());
//     const left = serialize(root.left);
//     const right = serialize(root.right);
//     return [...left, ...right];
//   };
