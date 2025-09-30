// program for check palindrome of array

function checkPalindrome(arr) {
  for (let i = 0; i < Math.floor(nums.length / 2); i++) {
    let j = nums.length - i - 1;
    if (nums[i] !== nums[j]) {
      return false;
    }
  }

  return true;
}

let nums = [1, 2, 3, 2, 1];

console.log(checkPalindrome(nums));
