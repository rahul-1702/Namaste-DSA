// let nums = [2, 4, 5, 7, 8, 9];
// let target = 7;
// output => 3

function binarySearch(arr, target, start, end) {
  let mid = Math.floor((start + end) / 2);

  if (start > end) return -1;

  if (arr[mid] === target) return mid;

  if (target > arr[mid]) {
    start = mid + 1;
    return binarySearch(arr, target, start, end);
  } else {
    end = mid - 1;
    return binarySearch(arr, target, start, end);
  }
}

let nums = [2, 4, 5, 7, 8, 9];
let target = 7;

let start = 0;
let end = nums.length - 1;

console.log(binarySearch(nums, target, start, end));
