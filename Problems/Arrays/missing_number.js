// Find Missing number in array

// function missingNumber(arr){
//     let temp = [];

//     for(let i = 0; i < arr.length; i++){
//         temp[arr[i]] = 1;
//     }

//     for(let j = 0; j <= temp.length; j++){
//         if(temp[j] !== 1){
//             return j;
//         }
//     }

//     return 0;
// }

function optimizedSolution(arr) {
  let n = arr.length;
  let sum = (n * (n + 1)) / 2;
  let count = 0;

  for (let i = 0; i < n; i++) {
    count = count + arr[i];
  }

  return sum - count;
}

const nums = [4, 0, 2, 1, 5];

// console.log(missingNumber(nums));
console.log(optimizedSolution(nums));
