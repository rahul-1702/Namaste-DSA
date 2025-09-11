function removeElements(nums, k) {

    let x = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i - 1] !== nums[i]){
            if(nums[i] === k){
                x = i;
            }else{
                nums[x] = nums[i];
                x = x + 1;
            }
        }    
    }

    return nums;

}

const arr = [6, 8, 3, 2, 2, 5, 0, 4, 2, 2, 9];
const element = 2;

console.log(removeElements(arr, element));
