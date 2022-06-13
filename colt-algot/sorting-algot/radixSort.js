// RADIX - numeroille
// O(nk)

function getDigit(number, index) {
  return Math.floor(Math.abs(number) / Math.pow(10, index)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(array) {
  let maxDigits = 0;
  array.forEach((element) => {
    maxDigits = Math.max(maxDigits, digitCount(element));
  });
  return maxDigits;
}

function radixSort(array) {
  const maxDigits = mostDigits(array);
  console.log(maxDigits);

  for (let k = 0; k < maxDigits; k++) {
    const bucketArray = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < array.length; i++) {
      let digit = getDigit(array[i], k);
      bucketArray[digit].push(array[i]);
    }
    console.log(bucketArray);
    array = [].concat(...bucketArray);
    console.log(array);
  }

  return array;
}

// console.log(getDigit(1234, 2));

// console.log(digitCount(21321), 'digits = 5');
// console.log(digitCount(21321), 'digits = 5');

// console.log(mostDigits([4, 7, 69, 100, 1, 420, 42, 999, 11]), 'most digits');

const sorted = radixSort([4, 7, 69, 100, 1, 420, 42, 999, 11]);

console.log(sorted);
