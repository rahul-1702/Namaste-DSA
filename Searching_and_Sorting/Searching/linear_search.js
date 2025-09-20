function linearSearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  return -1;
}

let nums = [2, 4, 5, 7, 8, 9];
let target = 7;

console.log(
  "Found " + target + " at " + linearSearch(nums, target) + " Index."
);
