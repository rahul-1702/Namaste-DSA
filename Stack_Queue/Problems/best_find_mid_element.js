var mySqrt = function (x) {
  if (x < 2) return x;
  let l = 2;
  let r = Math.floor(x / 2);
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
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

// 1. Small numbers / edge cases
console.log("Test 1:", mySqrt(0)); // Expected: 0
console.log("Test 4:", mySqrt(3)); // Expected: 1

// 2. Perfect squares
console.log("Test 5:", mySqrt(4)); // Expected: 2
console.log("Test 10:", mySqrt(100)); // Expected: 10

// 3. Non-perfect squares
console.log("Test 11:", mySqrt(6)); // Expected: 2
console.log("Test 14:", mySqrt(99)); // Expected: 9

// 4. Large values
console.log("Test 15:", mySqrt(10000)); // Expected: 100
console.log("Test 16:", mySqrt(2147395599)); // Expected: 46339

// 5. Maximum 32-bit integer input
console.log("Test 17:", mySqrt(2147483647)); // Expected: 46340
