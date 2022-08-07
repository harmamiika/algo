function containsDuplicate(nums) {
  const existing = {};

  for (let num of nums) {
    if (existing[num]) return true;
    else existing[num] = true;
  }

  return false;
}
