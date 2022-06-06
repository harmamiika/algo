// 1. BUBBLE SORT
// loopataan arrayn läpi ja isoin arvo bubbleaa korkealle - repeat unit nothing happens

const swap = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

// ?
const es2015swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

function bubbleSort(array) {
  function sort(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }
  let noSwaps;

  for (let i = array.length - 1; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        sort(array, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
}

const bubble = bubbleSort([69, 1, 5, 420, 42, 100, 999, 26]);
console.log(bubble, 'bubblesorted array');
