var rob = (nums) => {
  if (nums.length === 1) return nums[0];
  const withoutFirst = [...nums];
  const withoutLast = [...nums];
  withoutFirst.shift();
  withoutLast.pop();
  return Math.max(helper(withoutFirst), helper(withoutLast));
};

function helper(nums) {
  let rob1 = 0;
  let rob2 = 0;
  for (let num of nums) {
    temp = Math.max(num + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
}
