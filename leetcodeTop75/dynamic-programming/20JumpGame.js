// example
var canJump = function (nums) {
  goal = nums.length - 1;
  for (let i = goal; i >= 0; i--) {
    if (i + nums[i] >= goal) goal = i;
  }
  return goal === 0;
};

// omage
var canJump = function (nums) {
  let current = nums.length - 1;
  let can = true;
  let requiredJumpLength = 1;

  while (current > 0) {
    if (nums[current - 1] >= requiredJumpLength) {
      can = true;
      requiredJumpLength = 1;
    } else {
      can = false;
      requiredJumpLength++;
    }
    current--;
  }
  return can;
};
