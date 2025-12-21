var trap = function(arr) {
    let n = arr.length;
    let maxL = [];
    maxL[0] = arr[0];
    for (let i = 1; i < n; i++) {
        maxL[i] = Math.max(maxL[i - 1], arr[i]);
    }
    let maxR = [];
    maxR[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        maxR[i] = Math.max(arr[i], maxR[i + 1]);
    }
    let ans = 0;
    for (let i = 0; i < n; i++) {
        let waterTrapped = Math.min(maxL[i], maxR[i]) - arr[i];
        ans += Math.max(waterTrapped, 0);  // Avoid negative values
    }
    return ans;
};

// TEST CASES =====

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6 (classic example)

console.log(trap([4,2,0,3,2,5])); // 9

console.log(trap([1,0,2])); // 1

console.log(trap([2,0,2])); // 2

console.log(trap([3,0,0,2,0,4])); // 10

console.log(trap([0,0,0,0])); // 0 (all flat)

console.log(trap([5])); // 0 (single bar)

console.log(trap([])); // 0 (empty array)

console.log(trap([1,2,3,4,5])); // 0 (strictly increasing)

console.log(trap([5,4,3,2,1])); // 0 (strictly decreasing)
