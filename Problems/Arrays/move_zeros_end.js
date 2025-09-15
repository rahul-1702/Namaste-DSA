// Move Zeros to the End of the Array

// function moveZerosEnd(arr) {
//   let temp = [];
//   let k = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       temp[k] = arr[i];
//       k++;
//     }
//   }

//   for (let j = 0; j <= arr.length - temp.length; j++) {
//     temp[k] = 0;
//     k++;
//   }

//   return temp;
// }

function secondOptimizedSolution(arr){
    let k = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== 0){
            arr[k] = arr[i];
            k++;
        }
    }

    for(let j = k; j < arr.length; j++){
        arr[j] = 0;
    }

    return arr;
}

const nums = [0, 1, 0, 3, 12, 0, 0, 22];

// console.log(moveZerosEnd(nums));
console.log(secondOptimizedSolution(nums));
