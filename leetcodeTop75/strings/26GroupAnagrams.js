var groupAnagrams = function (strs) {
  const res = {};

  for (let string of strs) {
    const count = new Array(26).fill(0);
    for (let letter of string) {
      letter.charCodeAt(0);
      count[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    const key = JSON.stringify(count);
    if (res[key] === undefined) res[key] = [string];
    else res[key].push(string);
  }

  const result = [];
  for (let key in res) {
    result.push(res[key]);
  }
  return result;
};

// // oma meemi

// var groupAnagrams = function (strs) {
//   const sortString = (string) => string.split('').sort().join('');

//   const sorted = [];
//   for (let str of strs) {
//     sorted.push([str, sortString(str)]);
//   }

//   const result = [];
//   for (let s of sorted) {
//     let found = false;
//     for (let res of result) {
//       if (s[1] === res[0][1]) {
//         res.push(s);
//         found = true;
//         break;
//       }
//     }
//     if (!found) result.push([s]);
//   }

//   return result.map((r) => r.map((r2) => r2[0]));
// };
