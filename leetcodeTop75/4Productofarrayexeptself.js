var productExceptSelf = function (nums) {
  let res = [];

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix = prefix * nums[i];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = postfix * res[i];
    postfix = postfix * nums[i];
  }
  return res;
};

// var productExceptSelf = function(nums) {
//     let length = nums.length
//     let res = new Array(length).fill(1), right = 1;

//     for(let i = length - 2; i >= 0; i--) {
//         res[i] = res[i + 1] * nums[i + 1]
//     }

//     for(let i = 1; i < length; i++) {
//         right = right * nums[i - 1]
//         res[i] = right * res[i]
//     }

//     return res
// };
