const testArray = [69, 1, 5, 420, 42, 100, 999, 26];

function insertionSortByMiika(numberArray) {
  function swap(i1, i2) {
    [numberArray[i1], numberArray[i2]] = [numberArray[i2], numberArray[i1]];
  }
  for (let i = 1; i < numberArray.length; i++) {
    for (let j = i; j > 0; j--) {
      if (numberArray[j] < numberArray[j - 1]) swap(j, j - 1);
      else break;
    }
  }
  return numberArray;
}

console.log(insertionSortByMiika(testArray), 'insertion test');

function insertionSortByColt(numberArray) {
  for (let i = 1; i < numberArray.length; i++) {
    const currentVal = numberArray[i];
    for (let j = i - 1; j >= 0 && numberArray[j] > currentVal; j--) {
      numberArray[j + 1] = numberArray[j];
      if (numberArray[j] < currentVal) numberArray[j + 1] = currentVal;
    }
  }
  return numberArray;
}

console.log(insertionSortByColt(testArray), 'insertion test');
