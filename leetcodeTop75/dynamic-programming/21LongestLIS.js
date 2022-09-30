var lengthOfLIS = function (nums) {
  const LIS = new Array(nums.length).fill(1);

  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        LIS[i] = Math.max(LIS[i], 1 + LIS[j]);
      }
    }
  }

  return Math.max(...LIS);
};

// väärä vastaus
// COPYAPASTETTU OIKEA BEELOW

// var lengthOfLIS = function (nums) {
//   let arr = Array(nums.length).fill(1);

//   for (let i = 1; i < arr.length; i++) {
//       for (let j = 0; j < i; j++) {
//           if (nums[i] > nums[j]) {
//               arr[i] = Math.max(arr[i], arr[j] + 1);
//           }
//       }
//   }
//   return Math.max(...arr);
// };
