function lengthOfLastWord(str) {
  let s = str.trim();
  let n = s.length;
  let count = 0;

  while (n >= 0 && s[n] !== " ") n--;

  while (n < s.length - 1) {
    count++;
    n++;
  }

  return count;
}

function lengthOfLastWordOptimized(str) {
  let s = str.trim();
  let n = s.length;
  let count = 0;

  while (n >= 0 && s[n--] !== " ") count++;

  return --count;
}

let str = " Welcome to my world ";
console.log("Using two loops :", lengthOfLastWord(str));
console.log("Using one loop :", lengthOfLastWordOptimized(str));
