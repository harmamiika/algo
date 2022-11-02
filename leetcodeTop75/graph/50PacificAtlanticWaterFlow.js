// o(m * n)
var pacificAtlantic = function (heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  const [pac, atl] = [new Map(), new Map()];

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
      if (atl.get('' + r + '' + c) && pac.get('' + r + '' + c)) {
        res.push([r, c]);
      }
    }
  }
  console.log(res);
  return res;

  function dfs(r, c, visit, prevHeight) {
    // check if already visited or invalid
    if (
      visit.get('' + r + '' + c) ||
      r < 0 ||
      c < 0 ||
      r === rows ||
      c === cols ||
      heights[r][c] < prevHeight
    ) {
      return;
    }
    // HUOM, TäSsä ei mitään looppeja koska mennään vaan 1 kerralla
    visit.set('' + r + '' + c, true);
    dfs(r + 1, c, visit, heights[r][c]);
    dfs(r - 1, c, visit, heights[r][c]);
    dfs(r, c + 1, visit, heights[r][c]);
    dfs(r, c - 1, visit, heights[r][c]);
  }
};

pacificAtlantic([
  [1, 1],
  [1, 1],
  [1, 1],
]);
