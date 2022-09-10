var numDecodings = function (s) {
  let dp = {
    [s.length]: 1,
  };

  function dfs(i) {
    if (dp[i]) return dp[i];
    if (s[i] === '0') return 0;
    let res = dfs(i + 1);
    if (
      i + 1 < s.length &&
      (s[i] === '1' || (s[i] === '2' && '0123456'.includes(s[i + 1])))
    ) {
      res = res + dfs(i + 2);
    }
    dp[i] = res;
    return res;
  }

  return dfs(0);
};
