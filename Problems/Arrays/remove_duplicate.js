function removeDuplicates(nums){
    const arr = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i + 1] !== nums[i]){
            arr.push(nums[i]);
        }
    }
    return arr;
}

let arr = [1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 5,5, 6, 6];
// output: [1, 2, 3, 4, 5]

console.log(removeDuplicates(arr));