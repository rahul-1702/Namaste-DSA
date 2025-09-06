function secondLargest(arr) {
  if (arr.length === 0) {
    return "Array should not empty !!";
  }

  if (arr.length === 1) {
    return "Array must contain at least 2 elements !!";
  }

  let max1 = arr[0];
  let max2 = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    }
  }

  return max2;
}

function secondLargestWithoutDuplicate(arr) {
  if (arr.length === 0) {
    return "Array should not empty !!";
  }

  if (arr.length === 1) {
    return "Array must contain at least 2 elements !!";
  }

  let max1 = arr[0];
  let max2 = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2 && arr[i] !== max1 ) {
      max2 = arr[i];
    }
  }

  return max2;
}

const score = [34, 78, 10, 4, 8, 78, 65, 22, 44];

console.log("Second Largest : ", secondLargest(score));
console.log("Second Largest : ", secondLargestWithoutDuplicate(score));
