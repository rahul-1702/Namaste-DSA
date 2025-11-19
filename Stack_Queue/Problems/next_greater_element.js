var nextGreaterElement = function(nums1, arr) {
    let ngeMap = {};
    let stack = [];
    let n = arr.length;

    stack.push(arr[n-1]);
    ngeMap[arr[n-1]] = -1;
    for(let i=n-2; i>=0; i--){
        let top = stack[stack.length-1];
        if(arr[i] < top){
            ngeMap[arr[i]] = top;
        }
        else {
            while(stack.length) {
                if(stack[stack.length-1] < arr[i]){
                    stack.pop();
                } else {
                    ngeMap[arr[i]] = stack[stack.length-1];
                    break;
                }
            }
            if(stack.length === 0){
                ngeMap[arr[i]] = -1;
            }
        }
        stack.push(arr[i]);
    }
    let ans = [];
    for(let i=0; i < nums1.length; i++){
        ans.push(ngeMap[nums1[i]]);
    }
    return ans;
};

// TEST CASES =====

console.log(nextGreaterElement([4,1,2], [1,3,4,2]));
// Expected: [-1, 3, -1]

console.log(nextGreaterElement([2,4], [1,2,3,4]));
// Expected: [3, -1]

console.log(nextGreaterElement([1,3,5], [6,5,4,3,2,1,7]));
// Expected: [7, 7, 7]

console.log(nextGreaterElement([2,1], [2,1,3]));
// Expected: [3, 3]

console.log(nextGreaterElement([5,4], [5,4,3,2,1]));
// Expected: [-1, -1]

console.log(nextGreaterElement([2,3], [1,2,3,4,5]));
// Expected: [3, 4]

