// This file is about loops - advance

function pairsFromArray(arr, n) {
  let i = 0;
  let res = [];

  while (i < arr.length) {
    let newArr = [];

    for (let j = 0; j < n; j++) {
      newArr[j] = arr[i];
      i++;
    }
    res.push(newArr);
  }

  return res.map((x) => x.filter((e) => e !== undefined));
}

let nums = [2, 4, 6, 8, 1, 5, 7, 9, 3];
let count = 2;

console.log(pairsFromArray(nums, count));
