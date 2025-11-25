var guessNumber = function (n) {
  let l = 1;
  let r = n;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    let res = guess(m);
    if (res === 0) {
      return m;
    } else if (res < 0) {
      r = m - 1;
    } else {
      l = m + 1;
    } 
  }
};


// TEST CASES =====

// Helper to run tests with a mocked guess() API
function runTest(n, pick) {
  globalThis.pick = pick; // what number the system "thinks"
  globalThis.guess = function (num) {
    if (num === pick) return 0;
    if (num > pick) return -1;
    return 1;
  };
  console.log(`guessNumber(${n}), pick = ${pick} →`, guessNumber(n));
}

// 1. Small numbers
runTest(10, 6); // Expected: 6
runTest(5, 5); // Expected: 5

// 2. Middle values
runTest(100, 50); // Expected: 50
runTest(100, 99); // Expected: 99

// 3. Large numbers
runTest(1000, 1); // Expected: 1
runTest(1000, 1000); // Expected: 1000

// 4. Edge case: n = 1
runTest(1, 1); // Expected: 1
