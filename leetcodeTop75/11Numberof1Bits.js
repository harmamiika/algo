var hammingWeight = function (n) {
  let res = 0;

  while (n) {
    res += n % 2;
    // bitshift to right by one
    n = n >> 1;
  }

  return res;
};

// bitit voi trekkaa %2 tai &1
