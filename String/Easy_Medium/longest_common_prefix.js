/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let s = strs.reduce((a, b) => (a.length < b.length ? a : b));
  let l = "";
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    for (let str of strs) {
      if (str[i] !== c) return l;
    }
    l += c;
  }
  return l;
}

function longestCommonPrefixOptimized(sArr) {
  if (sArr.length === 0) {
    return "";
  } else if (sArr.length === 1) {
    return sArr[0];
  }

  let final = "";
  for (let i = 0; i < sArr[0].length; i++) {
    for (let j = 0; j < sArr.length - 1; j++) {
      if (sArr[j][i] === sArr[j + 1][i]) {
        if (j + 1 === sArr.length - 1) {
          final += sArr[j][i];
        }
      } else {
        return final;
      }
    }
  }

  return final;
}

let strs = ["flower", "flast", "floor"];

console.log(longestCommonPrefix(strs));
