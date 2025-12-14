var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    while( i < j){
        let sum = numbers[i] + numbers[j];
        if(sum > target) {
            --j;
        } else if(sum < target) {
            ++i;
        } else {
            return [i+1, j+1]
        }
    }
};

// TEST CASES =====

// 1. Basic sorted array
console.log(twoSum([2, 7, 11, 15], 9));
// Expected: [1, 2]

// 2. Numbers in middle
console.log(twoSum([1, 2, 3, 4, 6], 6));
// Expected: [2, 4]

// 3. Duplicate values
console.log(twoSum([1, 3, 3, 4], 6));
// Expected: [2, 3]

// 4. Negative numbers
console.log(twoSum([-5, -3, -1, 0, 4, 6], 1));
// Expected: [3, 5]

// 5. Large target
console.log(twoSum([1, 2, 4, 7, 11, 15], 18));
// Expected: [4, 5]

// 6. Pair at extreme ends
console.log(twoSum([1, 2, 3, 9, 10], 11));
// Expected: [1, 5]

// 7. Minimum size array
console.log(twoSum([5, 7], 12));
// Expected: [1, 2]
