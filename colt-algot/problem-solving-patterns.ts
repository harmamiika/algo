function countUniqueValues(sortedArray: number[]) {
  if (sortedArray.length === 0) return 0;

  let secondPointer = 0;

  for (
    let firstPointer = 1;
    firstPointer < sortedArray.length;
    firstPointer++
  ) {
    const firstValue = sortedArray[firstPointer];
    const secondValue = sortedArray[secondPointer];

    if (firstValue === secondValue) {
      // do nothing - move to the next
    } else if (firstValue !== secondValue) {
      secondPointer += 1;
      sortedArray[secondPointer] = firstValue;
    }
  }

  return secondPointer + 1;
}

// sliding window - divide and conguer - multiple pointers - frequency counter

// yleinen pattern - jos array on sorted - sille voi tehdä jotain optimointeja
