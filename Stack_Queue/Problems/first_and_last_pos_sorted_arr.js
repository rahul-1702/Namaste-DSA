var searchRange = function(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let ans = [-1, -1];

    // find first index
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] < target) l = m + 1;
        else r = m;
    }
    if (arr[l] === target) ans[0] = l;

    // find last index
    l = 0;
    r = arr.length - 1;
    while (l < r) {
        let m = l + Math.ceil((r - l) / 2);
        if (arr[m] > target) r = m - 1;
        else l = m;
    }
    if (arr[l] === target) ans[1] = l;
    return ans;
};

// TEST CASES =====

console.log(searchRange([5,7,7,8,8,10], 8));   // Expected [3,4]
console.log(searchRange([5,7,7,8,8,10], 7));   // Expected [1,2]
console.log(searchRange([5,7,7,8,8,10], 10));  // Expected [5,5]

console.log(searchRange([1,2,3,4], 6));  // Expected [-1,-1]
console.log(searchRange([], 3));         // Expected [-1,-1]
console.log(searchRange([3,3,3], 2));    // Expected [-1,-1]

console.log(searchRange([2], 2));  // Expected [0,0]
console.log(searchRange([2], 3));  // Expected [-1,-1]

console.log(searchRange([4,4,4,4], 4));  // Expected [0,3]
console.log(searchRange([4,4,4,4], 5));  // Expected [-1,-1]

console.log(searchRange([1,1,2,2,2,3,3,4], 2)); // Expected [2,4]
console.log(searchRange([1,2,3,4,5], 1));       // Expected [0,0]
console.log(searchRange([1,2,3,4,5], 5));       // Expected [4,4]
