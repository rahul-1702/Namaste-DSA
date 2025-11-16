var dailyTemperatures = function(arr) {
    let stack = [];
    let n = arr.length;
    let ans = Array(n).fill(0);
    stack.push(n-1);
    for(let i = n-2; i >= 0; i--){
        while(stack.length) {
            let top = stack[stack.length-1];
            if(arr[i] >= arr[top]) {
                stack.pop();
            } else {
                ans[i] = top - i;
                break;
            }
        }
        stack.push(i);
    }
    return ans;
};
// 1. LeetCode Example
console.log("Test 1:", dailyTemperatures([73,74,75,71,69,72,76,73]));
// Expected: [1,1,1,2,1,1,0,0]

// 2. Strictly Increasing Temperatures
console.log("Test 2:", dailyTemperatures([30,31,32,33,34]));
// Expected: [1,1,1,1,0]

// 3. Strictly Decreasing Temperatures
console.log("Test 3:", dailyTemperatures([90,80,70,60,50]));
// Expected: [0,0,0,0,0]

// 4. All Same Temperatures
console.log("Test 4:", dailyTemperatures([50,50,50,50]));
// Expected: [0,0,0,0]

// 5. Random Temperatures
console.log("Test 5:", dailyTemperatures([40,60,50,55,70,65]));
// Expected: [1,3,1,1,0,0]

// 6. Single Element Array
console.log("Test 6:", dailyTemperatures([100]));
// Expected: [0]

// 7. Two Elements
console.log("Test 7:", dailyTemperatures([30,40]));
// Expected: [1,0]