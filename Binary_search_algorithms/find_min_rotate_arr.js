var findMin = function(a) {
    let l = 0;
    let r = a.length - 1;

    while (l <= r) {
        if (a[l] <= a[r]) {
            return a[l];
        }

        let m = l + Math.floor((r - l) / 2);
        if (a[m] < a[m - 1]) {
            return a[m];
        }

        if (a[l] > a[m]) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
};
    
// TEST CASES =====

console.log(findMin([3,4,5,1,2])); // Expected 1
console.log(findMin([4,5,6,7,0,1,2])); // Expected 0
console.log(findMin([11,13,15,17])); // Expected 11

console.log(findMin([1])); // Expected 1
console.log(findMin([2,1])); // Expected 1
console.log(findMin([1,2])); // Expected 1

console.log(findMin([1,2,3,4,5])); // Expected 1
console.log(findMin([5,6,7,8,9])); // Expected 5

console.log(findMin([30,40,50,10,20])); // Expected 10
console.log(findMin([7,8,9,1,2,3,4,5,6])); // Expected 1

console.log(findMin([30,40,50,10,20])); // Expected 10
console.log(findMin([7,8,9,1,2,3,4,5,6])); // Expected 1
