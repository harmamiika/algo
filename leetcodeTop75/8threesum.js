var threeSum = function (nums) {
  const res = [];

  // sort array so can use 2sum 2 method with 2 pointers
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    // check if previous is duplicate, we dont vant to use it
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const threeSum = nums[i] + nums[l] + nums[r];
      if (threeSum > 0) r--;
      else if (threeSum < 0) l++;
      else if (threeSum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        // minimal code => only update 1 pointer
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }

  return res;
};

const nums = [1, 96, 3, 4, -1, -2, -3, -4];

threeSum(nums);
