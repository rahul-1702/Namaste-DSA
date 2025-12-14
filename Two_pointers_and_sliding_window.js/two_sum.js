var twoSum = function(nums, target) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }
}   

// TEST CASES =====

// 1. Basic case
console.log(twoSum([2, 7, 11, 15], 9));
// Expected: [0, 1]

// 2. Numbers in different order
console.log(twoSum([3, 2, 4], 6));
// Expected: [1, 2]

// 3. Duplicate numbers
console.log(twoSum([3, 3], 6));
// Expected: [0, 1]

// 4. Negative numbers
console.log(twoSum([-1, -2, -3, -4, -5], -8));
// Expected: [2, 4]

// 5. Mixed positive and negative
console.log(twoSum([-3, 4, 3, 90], 0));
// Expected: [0, 2]

// 6. Target not possible
console.log(twoSum([1, 2, 3, 4], 10));
// Expected: undefined

// 7. Single valid pair late in array
console.log(twoSum([1, 5, 9, 13, 6], 19));
// Expected: [3, 4]
