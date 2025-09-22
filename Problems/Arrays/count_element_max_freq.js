//  Count Elements With Maximum Frequency

// nums = [1,2,2,3,1,4]
// Output = 4

function maxFrequency(arr) {
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    if (res[arr[i]]) {
      res[arr[i]] = res[arr[i]] + 1;
    } else {
      res[arr[i]] = 1;
    }
  }

  let count = 0;
  Object.entries(res).forEach(([k, v]) => {
    if (v > count) {
      count = v;
    }
  });

  let freq = 0;
  Object.entries(res).forEach(([k, v]) => {
    if (count === v) {
      freq = freq + count;
    }
  });

  return freq;
}

let nums = [1, 2, 2, 3, 1, 4];
console.log(maxFrequency(nums));
