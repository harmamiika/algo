var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map = {};
  for (let letter of s) {
    if (map[letter] === undefined) map[letter] = 1;
    else map[letter]++;
  }
  for (let letter of t) {
    if (map[letter] === undefined || map[letter] === 0) return false;
    else map[letter]--;
  }
  return true;
};

// o(1) memory usage
var isAnagram = function (s, t) {
  const sortString = (string) => string.split('').sort().join('');
  return sortString(s) === sortString(t);
};
