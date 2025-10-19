function isPalindrome(s) {
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
