var mySqrt = function (x) {
  if (x < 2) return x;
  let l = 2;
  let r = Math.floor(x / 2);
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (x === m * m) {
      return m;
    } else if (x < m * m) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return r;
};


// TEST CASES =====

// 1. Small numbers
console.log("Test 1:", mySqrt(0)); // Expected: 0
console.log("Test 4:", mySqrt(3)); // Expected: 1

// 2. Perfect squares
console.log("Test 5:", mySqrt(4)); // Expected: 2
console.log("Test 9:", mySqrt(36)); // Expected: 6

// 3. Non-perfect squares
console.log("Test 10:", mySqrt(8)); // Expected: 2
console.log("Test 13:", mySqrt(26)); // Expected: 5

// 4. Larger numbers
console.log("Test 14:", mySqrt(100)); // Expected: 10
console.log("Test 15:", mySqrt(2147395599)); // Expected: 46339

// 5. Very large input near 32-bit limit
console.log("Test 16:", mySqrt(2147483647));
// Expected: 46340  (because 46340² = 2147395600 < 2147483647)
