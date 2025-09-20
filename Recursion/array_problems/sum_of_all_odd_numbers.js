// [2, 7, 3, 9, 6, 8, 5, 4] = 24

function sumOfAllOddNumbers(arr) {
  if (arr.length === 0) {
    return 0;
  }

  if (arr[0] % 2 === 1) {
    return arr[0] + sumOfAllOddNumbers(arr.splice(1));
  } else {
    return 0 + sumOfAllOddNumbers(arr.splice(1));
  }
}

let marks = [2, 7, 3, 9, 6, 8, 5, 4];

console.log(sumOfAllOddNumbers(marks));
