// Fins Max Consecutive Ones

function maxConsecutiveOnes(arr) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 && count >= max) {
      max = count;
      count = 0;
    } else {
      count++;
    }
  }

  return Math.max(max, count);
}

const nums = [0, 1, 0, 1, 1, , 0, 1, 1, 1, 0, 0, 1, 1];

console.log(maxConsecutiveOnes(nums));
