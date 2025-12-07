function reverseString(str) {
  let s = str.split("");

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }

  return s.join("");
}

function reverseString2(s, k) {
  s = s.split("");

  for (let x = 0; x < s.length; x = x + 2 * k) {
    let n = Math.min(k, s.length - x);
    let mid = Math.floor(n / 2);
    for (let i = 0; i < mid; i++) {
      let temp = s[x + i];
      s[x + i] = s[x + n - 1 - i];
      s[x + n - 1 - i] = temp;
    }
  }
  return s.join("");
}

let str1 = "RahulTaak";
let str2 = "RiyaTaak";
let k1 = 2;
let k2 = 3;

console.log(reverseString(str1));
console.log(reverseString(str2));

console.log(reverseString2(str1, k1));
console.log(reverseString2(str2, k2));
