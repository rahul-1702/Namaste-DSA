// Code to Merge Sorted Arrays

// function mergeSortedArrays(n1, n2){
//     let x = -1;
//     for(let i = 0; i < n1.length; i++){
//         if(n1[i] === 0 && x === -1){
//             x = 0;
//         }

//         if(x >= 0){
//             n1[i] = n2[x];
//             x++;
//         }
//     }
//     return n1.sort();
// }

// function optimizedSolution(n1, n2) {
//   let m = n1.filter((x) => x !== 0).length;
//   let n = n2.length;

//   let n1Copy = n1.slice(0, m);

//   let p1 = 0;
//   let p2 = 0;
//   for (let i = 0; i < m + n; i++) {
//     if (p1 < m && n1Copy[p1] < n2[p2]) {
//       n1[i] = n1Copy[p1];
//       p1++;
//     } else {
//       n1[i] = n2[p2];
//       p2++;
//     }
//   }
//   return n1;
// }

function secondOptimizedSolution(n1, n2) {
  let m = n1.filter((x) => x !== 0).length;
  let n = n2.length;
  let size = n1.length;

  let n1Copy = n1.slice(0, m);

  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = 1; i < m + n; i++) {
    if(p2 < 0 || (p1 >= 0 && n1Copy[p1]>n2[p2])){
        n1[size - i] = n1Copy[p1];
        p1--;
    }else{
        n1[size - i] = n2[p2];
        p2--;
    }
  }
  return n1;
}

const nums1 = [1, 3, 4, 6, 9, 0, 0, 0, 0, 0];
const nums2 = [2, 5, 6, 8, 9];

// console.log(mergeSortedArrays(nums1, nums2));
// console.log(optimizedSolution(nums1, nums2));
console.log(secondOptimizedSolution(nums1, nums2));
