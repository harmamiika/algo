// REQUIREMENTS
// 1. overlapping subproblems
// = yhteinen tekijä ?
// 2. optimal substructure
// = optimal solution comes from optiomal solution from subproblems

function fibonacci(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const res = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  memo[n] = res;
  return res;
}

console.log(fibonacci(69));

// TABULATION - store in table
// reacursion cat take up more space than this
function fib(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

// MOLEAMMET N
// UNMEMOIZED ON 2^N
