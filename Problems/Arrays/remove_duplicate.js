function removeDuplicates(nums){

    for(let i = 0; i < nums.length; i++){
        console.log("i = ", i);
    }

}

let arr = [1, 1,2, 2, 2, 3, 3, 4, 5, 5, 5];

// output: [1, 2, 3, 4, 5]

console.log(removeDuplicates(arr));