// nums => [1, 2, 3, 4, 5];
// Output => 8

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  while (nums.length > 1) {
    for (let i = 0; i < nums.length - 1; i++) {
      const total = nums[i] + nums[i + 1];
      nums[i] = total % 10;
    }
    nums.pop();
  }
  return nums[0];
};

let nums = [1, 2, 3, 4, 5];

console.log(triangularSum(nums));
