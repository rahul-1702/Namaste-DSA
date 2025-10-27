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
let strs = ["flower", "flast", "floor"];
console.log(longestCommonPrefix(strs));