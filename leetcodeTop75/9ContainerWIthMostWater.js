var maxArea = function (height) {
  let max = 0,
    l = 0,
    r = height.length - 1;

  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l);
    max = Math.max(area, max);
    if (height[l] < height[r]) {
      l++;
    } else r--;
  }

  return max;
};

// var maxArea = function (height) {
//     let max = 0;
//     for (let i = 0; i < height.length; i++) {
//       for (let j = i + 1; j < height.length; j++) {
//         const area = Math.min(height[i], height[j]) * j - i;
//         if (area > max) max = area;
//       }
//     }
//     return max;
//   };
