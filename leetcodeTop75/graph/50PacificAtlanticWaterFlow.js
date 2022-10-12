// o(m * n)

var pacificAtlantic = function (heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  const [pac, atl] = [new Set(), new Set()];

  for (let c = 0; c < cols; c++) {
    dfs(0, c, pac, heights[0][c]);
    dfs(rows - 1, c, atl, heights[rows - 1][c]);
  }

  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pac, heights[r][0]);
    dfs(r, cols - 1, atl, heights[r][cols - 1]);
  }

  const res = [];
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const coordinate = c.toString() + r.toString();
      if (atl.has(coordinate) && pac.has(coordinate)) {
        res.push(coordinate);
      }
    }
  }
  return res.map((i) => [i[0], i[1]]);

  function dfs(r, c, visit, prevHeight) {
    // check if already visited
    if (
      visit.has(r.toString() + c.toString()) ||
      r < 0 ||
      c < 0 ||
      r === rows ||
      c === cols ||
      heights[r][c] < prevHeight
    ) {
      return;
    }
    visit.add(r.toString() + c.toString());
    dfs(r + 1, c, visit, heights[r][c]);
    dfs(r - 1, c, visit, heights[r][c]);
    dfs(r, c + 1, visit, heights[r][c]);
    dfs(r, c - 1, visit, heights[r][c]);
  }
};
