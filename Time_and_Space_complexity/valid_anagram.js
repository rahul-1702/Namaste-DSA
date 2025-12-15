// Valid Anagram

function ValidAnagram(str, rev) {
  return str.split("").sort().join("") === rev.split("").sort().join("");
}

function ValidAnagramOptimized(str, rev) {
  if (str.length !== rev.length) return false;

  let sMap = {};
  for (let i = 0; i < str.length; i++) {
    if (sMap[str[i]]) ++sMap[str[i]];
    else sMap[str[i]] = 1;
  }

  for (let i = 0; i < rev.length; i++) {
    if (!sMap[rev[i]]) return false;

    if (sMap[rev[i]] > 0) --sMap[rev[i]];
    else return false;
  }

  for (let v of Object.values(sMap)) if (v !== 0) return false;

  return true;
}

let str = "anagram";
let rev = "raganam";

console.log(ValidAnagram(str, rev));
console.log(ValidAnagramOptimized(str, rev));

