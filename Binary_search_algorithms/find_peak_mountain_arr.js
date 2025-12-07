var peakIndexInMountainArray = function (arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m + 1] > arr[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return r;
};

// TEST CASES =====

// Basic mountain arrays :
console.log(peakIndexInMountainArray([0, 1, 0]));
// Expected 1
console.log(peakIndexInMountainArray([0, 2, 1, 0]));
// Expected 1
console.log(peakIndexInMountainArray([0, 3, 5, 3, 1]));
// Expected 2

// Larger mountain arrays :
console.log(peakIndexInMountainArray([1, 2, 3, 4, 5, 3, 2, 1]));
// Expected 4
console.log(peakIndexInMountainArray([2, 5, 10, 15, 12, 8, 3]));
// Expected 3

// Peak near edges (but still valid mountain) :
console.log(peakIndexInMountainArray([1, 5, 4, 3, 2]));
// Expected 1
console.log(peakIndexInMountainArray([1, 2, 3, 2]));
// Expected 2

// Minimum valid mountain (length = 3) :
console.log(peakIndexInMountainArray([1, 3, 2]));
// Expected 1
