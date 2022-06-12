function pivot(array, startIndex = 0, endIndex = array.length - 1) {
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

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    // left
    quickSort(array, left, pivotIndex - 1);
    // right
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

// jos pivot on min tai max - algo n^2, muuten normi ja best case n logn

console.log(quickSort([4, 7, 69, 100, 1, 420, 42, 999, 11]), 'quick sort');
