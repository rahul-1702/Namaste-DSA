// Find one Single Number in array

// function singleNumber(arr) {
//   let temp = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (temp[arr[i]] === 1) {
//       temp[arr[i]] = temp[arr[i]] + 1;
//     } else {
//       temp[arr[i]] = 1;
//     }
//   }

//   for (let j = 0; j < temp.length; j++) {
//     if (temp[j] === 1) {
//       return j;
//     }
//   }

//   return -1;
// }

function optimizedSolution(arr) {
  let temp = {};

  for (let i = 0; i < arr.length; i++) {
    if (temp[arr[i]] === 1) {
      temp[arr[i]] = temp[arr[i]] + 1;
    } else {
      temp[arr[i]] = 1;
    }
  }

  return +Object.keys(temp).filter((x) => temp[x] === 1)[0];
}

const nums = [2, 2, 4, 5, 5, 1, 5, 1];

// console.log(singleNumber(nums));
console.log(optimizedSolution(nums));
