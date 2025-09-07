/*

n = 786
output: no, bcz (786 != 687)

n = 2002
output: yes, bcz (2002 == 2002)

*/

function checkPalindrome(n) {
  if (n < 0) {
    return false;
  }

  let num = n;
  let rev = 0;
  while (n > 0) {
    let bit = n % 10;
    rev = (rev * 10) + bit;
    n = Math.floor(n / 10);
  }

  return rev === num;
}

let n = 2002;

console.log("checkPalindrome for " + n + " :", checkPalindrome(n));
