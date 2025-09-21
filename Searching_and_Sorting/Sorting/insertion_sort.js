// nums = [5, 2, 4, 1, 3]
// output = [1, 2, 3, 4, 5]

function selectionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > curr) {
        arr[j + 1] = arr[j];
        arr[j] = curr;
      }
    }
  }

  return arr;
}

let nums = [5, 2, 4, 1, 3];

console.log(selectionSort(nums));
