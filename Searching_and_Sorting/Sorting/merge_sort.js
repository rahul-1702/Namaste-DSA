// nums = [5, 2, 4, 1, 3]
// output = [1, 2, 3, 4, 5]
// Divide and Conquer/Merge

function merge(n1, n2) {
  let res = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < n1.length && p2 < n2.length) {
    if (n1[p1] < n2[p2]) {
      res.push(n1[p1]);
      p1++;
    } else {
      res.push(n2[p2]);
      p2++;
    }
  }

  while (p1 < n1.length) {
    res.push(n1[p1]);
    p1++;
  }

  while (p2 < n2.length) {
    res.push(n2[p2]);
    p2++;
  }
  return res;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

let nums = [5, 2, 4, 1, 3];

console.log(mergeSort(nums));
