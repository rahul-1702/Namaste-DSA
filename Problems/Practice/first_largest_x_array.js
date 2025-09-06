function firstLargest(arr) {
  if (arr.length === 0) {
    return "Array should not empty !!";
  }

  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

const score = [34, 78, 10, 4, 8, 23, 65, 82, 44];

console.log("First Largest : ", firstLargest(score));

