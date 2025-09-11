function removeElements(nums, k) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== k) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }

  return nums;
}

const arr = [6, 8, 2, 0, 4, 2, 2, 2, 8, 2, 2, 2, 2, 2, 2, 4];
const element = 2;

console.log(removeElements(arr, element));
