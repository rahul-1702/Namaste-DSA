// Find most frequent vowels and constants

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
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
    } else if (/[a-z]/.test(ch)) { // consonant check
      cMax = Math.max(cMax, freq[ch]);
    }
  }

  return vMax + cMax;
};

let str = "successes";

console.log(maxFreqSum(str));
