function reverseString(str) {
  let s = str.split("");

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }

  return s.join("");
}

function reverseString2(str, k) {
  let s = "";
  let st = str.split("");
  let original = k;
  let done = true;

  for (let i = 0; i < st.length; i++) {
    if (done) {
      s += st[i];
      k--;
      if (k === 0) {
        done = false;
        reverseString(s);
      }
    } else {
      k++;
    }

    if (k === original) {
      done = true;
    }
  }

  return st;
}

let str1 = "Rahul";
let str2 = "Riya";
let k1 = 2;
let k2 = 3;

console.log(reverseString(str1, k1));
console.log(reverseString(str2, k2));
