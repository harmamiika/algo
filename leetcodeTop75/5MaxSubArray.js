var maxSubArray = function (nums) {
  let maxSub = nums[0];
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (currentSum < 0) {
      currentSum = 0;
    }
    currentSum += nums[i];
    if (currentSum > maxSub) maxSub = currentSum;
  }

  return maxSub;
};
