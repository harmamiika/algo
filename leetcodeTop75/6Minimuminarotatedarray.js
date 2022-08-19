// var findMin = function (nums) {
//   let res = nums[0];
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     if (nums[left] < nums[right]) {
//       if (nums[left] < res) res = nums[left];
//       break;
//     }

//     const mid = (left + right) / 2;
//     if (nums[mid] < res) res = nums[mid];

//     if (nums[mid] >= nums[left]) left = mid + 1;
//     else right = mid - 1;
//   }

//   return res;
// };

var findMin = function nums() {
  let res = nums[0];
  let left = 0;
  let right = nums.length - 1;

  // binarty search => goes only to one direction
  while (left <= right) {
    if (nums[left] < nums[right]) {
      // if left is
      if (nums[left] < res) res = nums[left];
      break;
      // ?
    }

    // calculate midpoint
    const mid = (left + right) / 2;
    if (nums[mid] < res) res = nums[mid];

    // move left/right to mid
    if (nums[mid] >= nums[left]) left = mid + 1;
    else right = mid - 1;

    return res;
  }
};
