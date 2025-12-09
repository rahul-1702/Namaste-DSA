
var singleNonDuplicate = function (arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);

    // force m to be even
    if (m % 2 === 1) m--;

    if (arr[m] === arr[m + 1]) {
      l = m + 2; // single is on the right
    } else {
      r = m; // single is on the left (including m)
    }
  }

  return arr[l];
};

// TEST CASES =====


// Standard cases :
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4]));
// Expected 2
console.log(singleNonDuplicate([1, 1, 2, 2, 3, 4, 4]));
// Expected 3
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
// Expected 10

// Single element at start :
console.log(singleNonDuplicate([5, 6, 6, 7, 7, 8, 8]));
// Expected 5

// Single element at end :
console.log(singleNonDuplicate([1, 1, 2, 2, 3, 3, 9]));
// Expected 9

// Minimum valid input :
console.log(singleNonDuplicate([1]));
// Expected 1

// Larger input :
console.log(singleNonDuplicate([1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6]));
// Expected 5

// Negative values :
console.log(singleNonDuplicate([-5, -5, -3, -3, -1]));
// Expected -1
