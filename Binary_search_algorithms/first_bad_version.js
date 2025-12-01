var solution = function(isBadVersion) {
    return function(n) {
        let l = 1;
        let r = n;
        while (l < r) {
            let m = l + Math.floor((r - l) / 2);
            if (!isBadVersion(m)) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return r;
    };
};

// Test Cases =====

// function isBadVersion(version) {
//     return version >= 4;
// }

// const findFirstBad = solution(isBadVersion);
// console.log(findFirstBad(5));  // Output → 4

function isBadVersion(version) {
    return version >= 1;
}

const findFirstBad = solution(isBadVersion);
console.log(findFirstBad(5));  // Output → 1

