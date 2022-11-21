var rotate = function (matrix) {
  let l = 0;
  let r = matrix.length - 1;
  // at the end they become one?
  while (l < r) {
    for (let i = 0; i < r - l; i++) {
      let top = l;
      let bottom = r;

      // save topleft
      const topLeft = matrix[top][l + i];

      // move bottom left into topleft
      matrix[top][l + i] = matrix[bottom - i][l];

      // move the bttom right into the bottom left
      matrix[bottom - i][l] = matrix[bottom][r - i];

      // move top right into bottom right
      matrix[bottom][r - i] = matrix[top + i][r];

      // move bottom left into top right
      matrix[top + i][r] = topLeft;
    }
    r--;
    l++;
  }
  return matrix;
};
