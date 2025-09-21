// nums = [5, 2, 4, 1, 3]
// output = [1, 2, 3, 4, 5]

function bubbleSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

let nums = [5, 2, 4, 1, 3];

console.log(bubbleSort(nums));
