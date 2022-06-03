function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

// function binarySearch(sortedArray, value) {
//   let leftPointer = 0;
//   let rightPointer = sortedArray.length - 1;
//   let middlePointer = Math.floor((leftPointer + rightPointer) / 2);
//   while (sortedArray[middlePointer] !== value && leftPointer <= rightPointer) {
//     // if (sortedArray[middlePointer] === value) return middlePointer;
//     if (sortedArray[middlePointer] < value) {
//       leftPointer = middlePointer + 1;
//     } else {
//       rightPointer = middlePointer - 1;
//     }
//     middlePointer = Math.floor((leftPointer + rightPointer) / 2);
//   }
//   return sortedArray[middlePointer] === value ? middlePointer : -1;
// }

function binarySearch(sortedArray, value) {
  let leftPointer = 0;
  let rightPointer = sortedArray.length - 1;
  while (leftPointer <= rightPointer) {
    const middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    if (sortedArray[middlePointer] === value) return middlePointer;
    if (sortedArray[middlePointer] < value) leftPointer = middlePointer + 1;
    else rightPointer = middlePointer - 1;
  }
  return -1;
}
