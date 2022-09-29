var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let maxScore = 0;

  for (const num of [...numSet]) {
    const prevNum = num - 1;

    // only executes on the first / left most item
    if (numSet.has(prevNum)) continue;

    // just a mini algo to count streak
    let [currNum, score] = [num, 1];
    const isStreak = () => numSet.has(currNum + 1);
    while (isStreak()) {
      currNum++;
      score++;
    }

    maxScore = Math.max(maxScore, score);
  }

  return maxScore;
};
