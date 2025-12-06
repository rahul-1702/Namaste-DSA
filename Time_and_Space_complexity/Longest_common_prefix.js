// Longest common prefix

function findLongestCommonPrefix(sArr) {
    if(sArr.length === 0){
        return "";
    }else if(sArr.length === 1){
        return sArr[0];
    }
    
    let final = "";
    for(let i = 0; i < sArr[0].length; i++){
        for(let j = 0; j < sArr.length - 1; j++){
            if(sArr[j][i] === sArr[j + 1][i]){
                if(j + 1 === sArr.length - 1){
                    final += sArr[j][i];
                }
            }else{
                return final;
            }
        }
    }

    return final;
}


let str = ['98', '98', '98'];

console.log(findLongestCommonPrefix(str));
