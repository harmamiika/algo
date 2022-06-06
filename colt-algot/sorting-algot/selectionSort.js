function selectionSort(numberArray) {
  function swap(i1, i2) {
    const temp = numberArray[i1];
    numberArray[i1] = numberArray[i2];
    numberArray[i2] = temp;
  }
  for (let i = 0; i < numberArray.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < numberArray.length; j++) {
      if (numberArray[j] < numberArray[minIndex]) minIndex = j;
    }
    if (minIndex !== i) swap(minIndex, i);
  }
  return numberArray;
}

const selected = selectionSort([69, 1, 5, 420, 42, 100, 999, 26]);
console.log(selected, 'selection sorteds');
