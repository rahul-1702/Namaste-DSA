var isSubsequence = function(s, t) {
    let i = j = 0;
    while(j < t.length) {
        if(s[i] === t[j]) {
            ++i
        } 
        ++j;
    }
    return i === s.length;
};

// TEST CASES =====

// 1. Basic true case
console.log(isSubsequence("abc", "ahbgdc"));
// Expected: true

// 2. Basic false case
console.log(isSubsequence("axc", "ahbgdc"));
// Expected: false

// 3. Single character true
console.log(isSubsequence("a", "a"));
// Expected: true

// 4. Single character false
console.log(isSubsequence("a", "b"));
// Expected: false

// 5. Empty s (always true)
console.log(isSubsequence("", "ahbgdc"));
// Expected: true

// 6. Empty t (s not empty)
console.log(isSubsequence("a", ""));
// Expected: false

// 7. Both empty
console.log(isSubsequence("", ""));
// Expected: true

// 8. Repeated characters
console.log(isSubsequence("aaa", "aaabaaa"));
// Expected: true

// 9. Order matters
console.log(isSubsequence("abc", "acb"));
// Expected: false

// 10. s longer than t
console.log(isSubsequence("abcd", "abc"));
// Expected: false
