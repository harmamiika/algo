function twoSum(nums, target) {
  const visited = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    console.log(visited[diff]);
    if (visited[diff] !== undefined) return [i, visited[diff]];
    else visited[nums[i]] = i;
  }

  // nums.forEach((el, i) => {
  //   const diff = target - el;
  //   if (visited[diff] !== undefined) {
  //     return [i, visited[diff]];
  //   } else visited[el] = i;
  // });
}

console.log(twoSum([1, 2, 3, 69, 243, 33], 34));
