/*

n = -786
output: -687

n = 7864534543566
output: 0

*/

function reverseInteger(n) {
  let negative = false;
  if (n < 0) {
    n = Math.abs(n);
    negative = true;
  }
  let rev = 0;
  while (n > 0) {
    let bit = n % 10;
    rev = rev * 10 + bit;
    n = Math.floor(n / 10);
  }

  let limit = 2 ** 31;
  if (rev < -limit || rev > limit) return 0;

  if (negative) {
    return -rev;
  }
  return rev;
}

let n = -786;

console.log("reverseInteger for " + n + " :", reverseInteger(n));
