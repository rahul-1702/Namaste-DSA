
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
    return n1.sort();
}

function optimizeSolution(n1, m, n2, n){
    let n1Copy = n1.slice(0, m);

    let p1 = 0;
    let p2 = 0;
    for(let i = 0; i < m+n; i++){
       
        if(p2 >= n || (p1 < m && n1Copy[p1] < n2[p2])){
            n1[i] = n1Copy[p1];
            p1++;
        }else{
            n1[i] = n2[p2];
            p2++;
        }
        
    }

    return n1;
}

const nums1 = [1, 2, 8, 3, 0, 0, 0];
const nums2 = [2, 5, 6, 3, 4];

console.log(mergeSortedArrays(nums1, nums2));
console.log(optimizeSolution(nums1, nums1.length, nums2, nums2.length));