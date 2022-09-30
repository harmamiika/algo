// aikakompleksisuutta voi vähentää maxF huomioinnilla

var characterReplacement = function (s, k) {
  let [l, r, longest, count] = [0, 0, 0, {}];

  // let maxF = 0

  const addToCount = (i) => {
    // virhe, koska klassinen index, eikä elementti indexissä
    if (count[s[i]] === undefined) count[s[i]] = 1;
    else count[s[i]]++;
  };
  const removeFromCount = (i) => {
    if (count[s[i]] === 1) count[s[i]] = undefined;
    else if (count[s[i]] > 1) count[s[i]]--;
    else console.log('brooooo');
  };

  // const calculcateMostFrequentChar = () => {
  //   let max = 0;
  //   Object.keys(count).forEach((key) => {
  //     console.log(count);
  //     console.log(key, 'key');
  //     console.log(count[key], max);
  //     // virhe, koska voi olla undefined => NaN
  //     max = Math.max(count[key] || 0, max);
  //   });
  //   return max;
  // };

  while (r < s.length) {
    addToCount(r);
    maxF = Math.max(maxF, count[s[r]]);

    // while (r - l + 1 > calculcateMostFrequentChar() + k) {
    while (r - l + 1 > maxF + k) {
      removeFromCount(l);
      l++;
    }
    // sliding windowin pituuslaskusta puuttui +1
    longest = Math.max(r - l + 1, longest);
    r++;
  }
  return longest;
};
