// nums = [5, 2, 4, 1, 3]
// output = [1, 2, 3, 4, 5]
// Think while Selecting, Inesrt any

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}

let nums = [5, 2, 4, 1, 3];

console.log(selectionSort(nums));
