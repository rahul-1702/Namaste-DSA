/*

n = 786
output: 687

*/

function reverseInteger(n) {
  if (n < 0) {
    n = Math.abs(n);
  }
  let rev = 0;
  while (n > 0) {
    let bit = n % 10;
    rev = rev * 10 + bit;
    n = Math.floor(n / 10);
  }

  return rev;
}

let n = -786;

console.log("reverseInteger for " + n + " :", reverseInteger(n));
