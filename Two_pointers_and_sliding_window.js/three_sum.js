var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            twoSum(nums, i, ans);
        }
    }
    return ans;
};
var twoSum = function(arr, x, ans) {
    let i = x + 1;
    let j = arr.length - 1;
    while (i < j) {
        let sum = arr[i] + arr[j] + arr[x];
        if (sum > 0) {
            j--;
        } else if (sum < 0) {
            i++;
        } else {
            ans.push([arr[i], arr[j], arr[x]]);
            i++;
            j--;
            // Skip duplicates for the second element
            while (i < j && arr[i] === arr[i - 1]) {
                i++;
            }
        }
    }
};
    
// TEST CASSES =====

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [ [ -1, 2, -1 ], [ 0, 1, -1 ] ]
console.log(threeSum([0, 0, 0, 0]));         // [ [ 0, 0, 0 ] ]
console.log(threeSum([1, 2, 3]));            // []
console.log(threeSum([-2, 0, 1, 1, 2]));     // [ [ 1, 1, -2 ] ]
console.log(threeSum([0, 1]));               // []
console.log(threeSum([-1, -1, -1, 2, 2]));   // [ [ -1, 2, -1 ] ]
