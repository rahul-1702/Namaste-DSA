// Find most frequent vowels and constants

var maxFreqSum = function (s) {
  const freq = {};

  // count frequencies
  for (let ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  let vMax = 0; // max vowel frequency
  let cMax = 0; // max consonant frequency

  for (let ch in freq) {
    if ("aeiou".includes(ch)) {
      vMax = Math.max(vMax, freq[ch]);
    } else if (/[a-z]/.test(ch)) {
      // consonant check
      cMax = Math.max(cMax, freq[ch]);
    }
  }

  return vMax + cMax;
};

function maxFreqSumAnother(str) {
  let vMap = new Map();
  let cMap = new Map();
  for (let i = 0; i < str.length; i++) {
    let s = str[i].toLowerCase();

    if ("aeiou".includes(s)) {
      if (vMap.has(s)) {
        vMap.set(s, vMap.get(s) + 1);
      } else {
        vMap.set(s, 1);
      }
    } else {
      if (cMap.has(s)) {
        cMap.set(s, cMap.get(s) + 1);
      } else {
        cMap.set(s, 1);
      }
    }
  }

  return (
    (cMap.size ? Math.max(...cMap.values()) : 0) +
    (vMap.size ? Math.max(...vMap.values()) : 0)
  );
}

let str1 = "successes";

console.log(maxFreqSum(str1));
console.log(maxFreqSumAnother(str1));
