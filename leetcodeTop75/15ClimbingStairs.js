var climbStairs = function (n) {
  let one = 1;
  let two = 1;

  for (let i = 0; i < n - 1; i++) {
    const temp = one;
    one = one + two;
    two = temp;
  }

  return one;
};

// portaiden kiipeäminen voidaan visualisoida puulla
// perus o(2^n)
// memoizatiolla päästään o(n)

// bottom up dynamic programming aproach

// fibonacci
