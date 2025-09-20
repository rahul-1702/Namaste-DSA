// [2, 7, 3, 9, 6, 8, 5, 4] = 24

// function sumOfAllOddNumbers(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }

//   if (arr[0] % 2 === 1) {
//     return arr[0] + sumOfAllOddNumbers(arr.splice(1));
//   } else {
//     return 0 + sumOfAllOddNumbers(arr.splice(1));
//   }
// }

function sumOfAllOddNumbers2(n) {
  if (n === 0) {
    return 0;
  }

  if (marks[n] % 2 === 1) {
    return marks[n] + sumOfAllOddNumbers2(n - 1);
  } else {
    return 0 + sumOfAllOddNumbers2(n - 1);
  }
}

let marks = [2, 7, 3, 9, 6, 8, 5, 4];

// console.log(sumOfAllOddNumbers(marks));
console.log(sumOfAllOddNumbers2(marks.length - 1));
