var findClosestElements = function (arr, k, x) {
  let l = 0;
  let r = arr.length - k;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m + k] - x < x - arr[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  let ans = [];
  for (let i = l; i < l + k; i++) {
    ans.push(arr[i]);
  }
  return ans;
};

// TEST CASES =====

// Standard cases :
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
// Expected [1,2,3,4]
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
// Expected [1,2,3,4]
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 10));
// Expected [2,3,4,5]

// Exact match cases :
console.log(findClosestElements([1, 3, 5, 7, 9], 2, 5));
// Expected [3,5]
console.log(findClosestElements([1, 3, 5, 7, 9], 1, 7));
// Expected [7]

// Negative values :
console.log(findClosestElements([-10, -5, 0, 5, 10], 3, 0));
// Expected [-5,0,5]
console.log(findClosestElements([-10, -5, 0, 5, 10], 2, -6));
// Expected [-10,-5]

// Edge cases :
console.log(findClosestElements([1], 1, 1));
// Expected [1]
console.log(findClosestElements([1, 2], 1, 2));
// Expected [2]
console.log(findClosestElements([1, 2, 3], 3, 2));
// Expected [1,2,3]

// Large gap values :
console.log(findClosestElements([1, 100, 200, 300, 400], 2, 150));
// Expected [100,200]
console.log(findClosestElements([1, 100, 200, 300, 400], 3, 350));
// Expected [200,300,400]
