// both arrays sorted
function merge(array1, array2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    } else if (array2[j] <= array1[i]) {
      result.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }

  return result;
}

console.log(merge([1, 69, 100, 999], [2, 5, 6, 6969]));

function mergeSort(array) {
  if (array.length <= 1) return array;
  let midpoint = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, midpoint));
  let right = mergeSort(array.slice(midpoint));
  return merge(left, right);
}

console.log(mergeSort([1, 5, 69, 402, 402, 90000, 123, 4]));
