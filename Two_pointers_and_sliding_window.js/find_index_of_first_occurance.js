var strStr = function(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;

    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        for (j = 0; j < m; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
        if (j === m) {
            return i;
        }
    }
    return -1;
};
  
// TEST CASES =====

// 1. Basic match
console.log(strStr("hello", "ll"));
// Expected: 2

// 2. No match
console.log(strStr("aaaaa", "bba"));
// Expected: -1

// 3. Needle at start
console.log(strStr("leetcode", "leet"));
// Expected: 0

// 4. Needle at end
console.log(strStr("coding", "ing"));
// Expected: 3

// 5. Whole string match
console.log(strStr("abc", "abc"));
// Expected: 0

// 6. Needle longer than haystack
console.log(strStr("short", "longer"));
// Expected: -1

// 7. Empty needle (important edge case)
console.log(strStr("abc", ""));
// Expected: 0

// 8. Empty haystack
console.log(strStr("", "a"));
// Expected: -1

// 9. Both empty
console.log(strStr("", ""));
// Expected: 0

// 10. Repeated pattern
console.log(strStr("mississippi", "issi"));
// Expected: 1
