var numIslands = function (grid) {
  if (!grid) return 0;

  let rows = grid.length;
  let cols = grid[0].length;

  let visit = new Set();
  let islands = 0;

  function dfs(i, j) {
    let q = [];
    visit.add(i, j);
    q.push([i, j]);

    while (q.length) {
      const arr = q.shift();
    }
  }

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      if (grid[i][j] === '1' && visit.has(i, j)) {
        bfs(i, j);
        islands++;
      }
    }
  }
};
