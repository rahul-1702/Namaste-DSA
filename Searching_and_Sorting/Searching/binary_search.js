// let nums = [2, 4, 5, 7, 8, 9];
// let target = 7;
// output => 3

function binarySearchLoop(arr, target, start, end) {
  while (end >= start) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;

    if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

// function binarySearchRecursion(arr, target, start, end) {
//   let mid = Math.floor((start + end) / 2);

//   if (start > end) return -1;

//   if (arr[mid] === target) return mid;

//   if (target > arr[mid]) {
//     start = mid + 1;
//     return binarySearchRecursion(arr, target, start, end);
//   } else {
//     end = mid - 1;
//     return binarySearchRecursion(arr, target, start, end);
//   }
// }

let nums = [2, 4, 5, 7, 8, 9];
let target = 2;

let start = 0;
let end = nums.length - 1;

console.log(binarySearchLoop(nums, target, start, end));
// console.log(binarySearchRecursion(nums, target, start, end));
