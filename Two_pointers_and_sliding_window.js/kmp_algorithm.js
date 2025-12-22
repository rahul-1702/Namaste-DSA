var strStr = function(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;
    let lps = [0];
    let i = 0;
    let j = 1;
    while(j < m){
        if(needle[i] === needle[j]) {
            lps[j] = i+1;
            ++i;
            ++j;
        } else {
            if(i == 0) {
                lps[j] = 0;
                ++j;
            } else{
                i = lps[i-1];
            }
        }
    }
    i = j = 0;
    while(i < n) {
        if(haystack[i] === needle[j]) {
            ++i;
            ++j;
        } else{
            if(j==0) {
                ++i;
            } else {
                j = lps[j-1];
            }
        }
        if(j === m){
            return i - m;
        }
    }
    return -1;
};

// TEST CASES =====

// Basic match
console.log(strStr("hello", "ll")); // 2

// No match
console.log(strStr("aaaaa", "bba")); // -1

// Needle equals haystack
console.log(strStr("abc", "abc")); // 0

// Needle at start
console.log(strStr("leetcode", "leet")); // 0

// Needle at end
console.log(strStr("leetcode", "code")); // 4

// Repeated pattern (KMP advantage)
console.log(strStr("ababababca", "abababca")); // 2

// Partial overlap
console.log(strStr("mississippi", "issip")); // 4

// Single character match
console.log(strStr("a", "a")); // 0

// Needle longer than haystack
console.log(strStr("short", "longer")); // -1

// Empty needle (LeetCode expects 0)
console.log(strStr("anything", "")); // 0

// Empty haystack
console.log(strStr("", "a")); // -1

// Both empty
console.log(strStr("", "")); // 0
