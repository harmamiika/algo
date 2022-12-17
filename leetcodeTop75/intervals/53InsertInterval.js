var insert = function (intervals, newInterval) {
  // jos ennen tai jälkeen, niin uusi interval tulee vain perään
  // aka intervalin loppu on pienempi kuin ensimmäisen alku, tai intervalin alku on suurempi kuin viimeisen   loppu
  // intervalli overlappaa, jos sen alku, tai loppu on pienempi, tai yhtä suuri, kuin olemassa olevan

  const res = [];
  const overlapped = [];
  let isOverlapping = false;

  for (let interval of intervals) {
    // jos on välissä, niin overlap
    // ?? <=
    if (
      (interval[0] < newInterval[0] && newInterval[0] < interval[1]) ||
      (interval[0] < newInterval[1] && newInterval[1] < interval[1])
    ) {
      isOverlapping = true;
      overlapped.push(interval);
    } else {
      if (isOverlapping) {
        console.log(isOverlapping, 'is overlapping');
        console.log(res, 'res');
        // push overlapped item to arr
        res.push([
          overlapped[0][0],
          Math.max(newInterval[1], overlapped[overlapped.length - 1][1]),
        ]);
        isOverlapping = false;
      } else res.push(interval);
    }
  }
  return res;
};

var insert = function (intervals, newInterval) {
  const res = [];
  const overlapped = [];

  for (let interval of intervals) {
    if (
      (interval[0] < newInterval[0] && newInterval[0] < interval[1]) ||
      (interval[0] < newInterval[1] && newInterval[1] < interval[1])
    ) {
      overlapped.push(interval);
    } else {
      if (isOverlapping) {
        res.push([
          overlapped[0][0],
          Math.max(newInterval[1], overlapped[overlapped.length - 1][1]),
        ]);
      } else res.push(interval);
    }
  }
  return res;
};

var insert = function (intervals, newInterval) {
  const res = [];

  intervals.forEach((interval, i) => {
    if (newInterval[1] < interval[0]) {
      res.push(newInterval);
      res.push(...intervals.slice(i));
      return res;
    } else if (newInterval[0] > interval[1]) {
      res.push(interval);
    } else {
      newInterval = [Math.min(newInterval[0], interval[0]), Math.max(newInterval[1], interval[1])];
    }
  });

  return res;
};
