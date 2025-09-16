// Find Missing number in array

function missingNumber(arr){
    let temp = [];

    for(let i = 0; i < arr.length; i++){   
        temp[arr[i]] = 1;
    }

    for(let j = 0; j <= temp.length; j++){
        if(temp[j] !== 1){
            return j;
        }
    }

    return 0;
}

const nums = [2, 0, 1];

console.log(missingNumber(nums));