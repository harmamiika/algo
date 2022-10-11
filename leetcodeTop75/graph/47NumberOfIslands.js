var numIslands = function (grid) {
  if (!grid) return 0;

  let rows = grid.length;
  let cols = grid[0].length;

  let visit = new Set();
  let islands = 0;

  function bfs(i, j) {
    let q = [];
    visit.add(i, j);
    console.log(visit, 'visit');
    q.push([i, j]);

    while (q.length) {
      const item = q.shift();
      const [row, col] = [item[0], item[1]];
      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];

      for (let dir in directions) {
        const [r, c] = [dir[0] + row, dir[1] + col];
        if (
          r >= 0 &&
          c >= 0 &&
          r < rows &&
          c < cols &&
          grid[r][c] === '1' &&
          !visit.has(r, c)
        ) {
          q.push([r, c]);
          visit.add(r, c);
        }
      }
    }
    console.log(visit, 'visit');
  }

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      if (grid[i][j] === '1' && !visit.has(i, j)) {
        bfs(i, j);
        islands++;
      }
    }
  }

  return islands;
};
