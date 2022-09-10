var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (i = 1; i < amount + 1; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }

  return dp[amount] !== amount + 1 ? dp[amount] : -1;
};

// aikakompleksisuus
// o (amount * coins.length)
// muisti
// o(amount)
