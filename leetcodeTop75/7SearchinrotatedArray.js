var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = undefined;

  while (left <= right) {
    // calculate mid and check for a match
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    // 1. vertaa midiä leftiin => saa tietoa arraysta
    // 2. vertaa targettia

    // left sorted portion
    if (nums[mid] >= nums[left]) {
      if (target > nums[mid] || target < nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    // right sorted portion
    else {
      if (target < nums[mid] || target > nums[r]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
};
