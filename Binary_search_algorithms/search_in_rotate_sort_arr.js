// Your function
var search = function (arr, target) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (target === arr[m]) {
      return m;
    }

    // Left half sorted
    if (arr[l] <= arr[m]) {
      if (target >= arr[l] && target < arr[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
    // Right half sorted
    else {
      if (target > arr[m] && target <= arr[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }
  return -1;
};

// TEST CASES =====

// 1. Standard rotated array
console.log("Test 1:", search([4, 5, 6, 7, 0, 1, 2], 0));
// Expected: 4

// 2. Target on left side
console.log("Test 2:", search([4, 5, 6, 7, 0, 1, 2], 6));
// Expected: 2

// 3. Target on right side
console.log("Test 3:", search([4, 5, 6, 7, 0, 1, 2], 1));
// Expected: 5

// 4. Target not found
console.log("Test 4:", search([4, 5, 6, 7, 0, 1, 2], 3));
// Expected: -1

// 5. Rotated at last index
console.log("Test 5:", search([1, 2, 3, 4, 5, 6, 0], 0));
// Expected: 6

// 6. No rotation (normal binary search)
console.log("Test 6:", search([1, 2, 3, 4, 5, 6, 7], 5));
// Expected: 4

// 7. Single element - found
console.log("Test 7:", search([10], 10));
// Expected: 0

// 8. Single element - not found
console.log("Test 8:", search([10], 5));
// Expected: -1

// 9. Two elements - rotated
console.log("Test 9:", search([3, 1], 1));
// Expected: 1

// 10. Large numbers
console.log("Test 10:", search([30, 40, 50, 10, 20], 10));
// Expected: 3

// 11. Target at pivot point
console.log("Test 11:", search([6, 7, 8, 1, 2, 3, 4, 5], 1));
// Expected: 3

// 12. Target not present in small rotated array
console.log("Test 12:", search([5, 1, 3], 2));
// Expected: -1
