var nextGreaterElements = function(arr) {
    let n = arr.length;
    let stack = [];
    let ans = Array(n).fill(-1);
    stack.push(arr[n-1]);
    for(let i=(2*n)-2; i >= 0; i--){
        while(stack.length){
            let top = stack[stack.length-1];
            if(arr[i % n] < top){
                ans[i % n] = top;
                break;
            } else{
                stack.pop();
            }
        }
        stack.push(arr[i % n]);
    }
    return ans.slice(0, n);
};

// TEST CASES =====

// 1. LeetCode Example
console.log("Test 1:", nextGreaterElements([1,2,1]));
// Expected: [2, -1, 2]

// 2. Increasing Order
console.log("Test 2:", nextGreaterElements([1,2,3,4]));
// Expected: [2,3,4,-1]

// 3. Decreasing Order (all wrap)
console.log("Test 3:", nextGreaterElements([5,4,3,2,1]));
// Expected: [-1,5,5,5,5]

// 4. Mixed Random Values
console.log("Test 4:", nextGreaterElements([4,6,3,2,8,1]));
// Expected: [6,8,8,8,-1,4]

// 5. All Identical Elements
console.log("Test 5:", nextGreaterElements([7,7,7,7]));
// Expected: [-1,-1,-1,-1]

// 6. Single Element
console.log("Test 6:", nextGreaterElements([10]));
// Expected: [-1]

// 7. Two Elements
console.log("Test 7:", nextGreaterElements([2,1]));
// Expected: [-1,2]

// 8. Large Peaks in the Middle
console.log("Test 8:", nextGreaterElements([2,5,3,1,7,4]));
// Expected: [5,7,7,7,-1,7]