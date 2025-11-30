var findPeakElement = function(arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] < arr[m + 1]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return l;
};
     
// TEST CASES =====

console.log(findPeakElement([1,2,3,1]));        // Expected 2  (value 3)
console.log(findPeakElement([1,2,1]));          // Expected 1  (value 2)

console.log(findPeakElement([5,4,3,2,1]));      // Expected 0  (value 5)
console.log(findPeakElement([1,2,3,4,5]));      // Expected 4  (value 5)

console.log(findPeakElement([1,3,2,4,1]));      // Expected 1 or 3
console.log(findPeakElement([2,2,2,2]));        // Any index from 0–3

console.log(findPeakElement([1]));              // Expected 0
console.log(findPeakElement([2,1]));            // Expected 0
console.log(findPeakElement([1,2]));            // Expected 1

console.log(findPeakElement([1,2,3,4,3,2]));    // Expected 3  (value 4)
