function isPalindrome(s) {
  s = s.toLowerCase();
  let filteredString = "";
  let rev = "";
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i].charCodeAt() >= "a".charCodeAt() &&
        s[i].charCodeAt() <= "z".charCodeAt()) ||
      (s[i].charCodeAt() >= "0".charCodeAt() &&
        s[i].charCodeAt() <= "9".charCodeAt())
    ) {
      filteredString = filteredString + s[i];
      rev = s[i] + rev;
    }
  }
  return filteredString === rev;
}
function isPalindromeOptimized(s) {
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!s[i].match(/[a-z0-9]/i)) {
      ++i;
    } else if (!s[j].match(/[a-z0-9]/i)) {
      --j;
    } else if (s[i] === s[j]) {
      ++i;
      --j;
    } else {
      return false;
    }
  }
  return true;
}
let str1 = "apple";
let str2 = "kulkluk";
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log("Optimized :", isPalindrome(str1));
console.log("Optimized :", isPalindrome(str2));
