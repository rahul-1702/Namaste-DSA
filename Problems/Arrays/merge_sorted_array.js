
function mergeSortedArrays(n1, n2){
    let x = -1;
    for(let i = 0; i < n1.length; i++){
        if(n1[i] === 0 && x === -1){
            x = 0;
        }
        if(x >= 0){
            n1[i] = n2[x];
            x++;
        }
    }
    return n1;
}


const nums1 = [1, 2, 0, 0, 0, 0, 0];
const nums2 = [2, 5, 6, 8, 4];

console.log(mergeSortedArrays(nums1, nums2));