// bucket sort?

var topKFrequent = function (nums, k) {
  const countMap = new Map();
  const bucket = new Array(nums.length + 1).fill([]);

  // get map
  for (let num of nums) {
    console.log(countMap.get(num));
    const count = (countMap.get(num) || 0) + 1;
    countMap.set(num, count);
    console.log(countMap);
  }

  console.log(countMap);

  console.log(bucket);
  // get count
  for (const [num, count] of countMap.entries()) {
    bucket[count] = [...(bucket[count] || []), num];
    console.log(bucket);
  }
  console.log(bucket);
  const res = [];
  let i = bucket.length - 1;
  while (true) {
    for (let num of bucket[i]) {
      if (res.length === k) return res;

      res.push(num);
    }
    i--;
  }
};

console.log(topKFrequent([1, 2, 2, 2, 2, 5, 3, 4, 6, 4, 21, 5, 3, 4], 3));

// var topKFrequent = function (nums, k) {
//   let counter = {};
//   for (let num of nums) {
//     if (counter[num] === undefined) counter[num] = 1;
//     else counter[num]++;
//   }
//   console.log(counter);

//   const counterArray = new Array(nums.length).fill([]);
//   for (let key in counter) {
//     counterArray[counter[key]] = [...(counterArray[counter[key]] || []), key];
//     console.log(key);
//   }
//   console.log(counterArray);

//   const res = [];
//   for (let i = counterArray.length - 1; i >= 0; i--) {
//     if (counterArray[i].length > 0) {
//       for (let item of counterArray[i]) {
//         res.push(item);
//         console.log(res.length, k);
//         if (res.length === k) break;
//       }
//       if (res.length === k) break;
//     }
//   }
//   return res;
// };
