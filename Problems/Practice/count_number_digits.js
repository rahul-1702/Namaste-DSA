/*

n = 786

output: 3

*/

function countDigits(n) {
  if (n === 0) {
    return 1;
  }

  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }

  return count;
}

let n = -786;

console.log("countDigits for " + n + " :", countDigits(n));
