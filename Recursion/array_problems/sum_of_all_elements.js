// [6, 8, 3, 2, 5, 1, 9, 0, 4, 7] = 45

function sumOfAllElements(arr){
    if(arr.length === 1){
        return arr[0];
    }

    return arr[0] + sumOfAllElements(arr.splice(1))
}

let marks = [6, 8, 3, 2, 5, 1, 9, 0, 4, 7];

console.log(sumOfAllElements(marks));