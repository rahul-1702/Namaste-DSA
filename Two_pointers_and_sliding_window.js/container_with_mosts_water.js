var maxArea = function(arr) {
    let i = 0;
    let j = arr.length - 1;
    let maxWater = 0;
    while(i < j){
        let area = Math.min(arr[i], arr[j]) * (j-i);
        maxWater = Math.max(maxWater, area);
        if(arr[i] > arr[j]) {
            --j;
        } else {
            ++i;
        }
    }
    return maxWater;
};

// TEST CASES =====

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49 (classic example)

console.log(maxArea([1,1])); // 1

console.log(maxArea([4,3,2,1,4])); // 16

console.log(maxArea([1,2,1])); // 2

console.log(maxArea([2,3,4,5,18,17,6])); // 17

console.log(maxArea([1,2,4,3])); // 4

console.log(maxArea([5,5,5,5])); // 15 (same heights)

console.log(maxArea([1,3,2,5,25,24,5])); // 24

console.log(maxArea([10])); // 0 (single line)

console.log(maxArea([])); // 0 (empty array)
