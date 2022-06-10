function pivot(array, startIndex = 0, endIndex = array.length + 1) {
  function swap(i1, i2) {
    const temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
  }

  // tämä vaikuttaa paljon, monia tapoja
  let pivot = array[startIndex];
  let swapIndex = startIndex;

  for (let i = startIndex + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      swapIndex++;
      swap(swapIndex, i);
    }
  }

  swap(startIndex, swapIndex);
  return swapIndex;
}

// function quickSort(array, left = )
