// This fileis for basic recursion

function SimpleCounting(n) {
  if (n < 1) return;

  console.log(n);
  SimpleCounting(--n);
}

// -----------------------------------------
let num = 5;
function ReverseCounting1(n) {
  if (n > num) return;

  console.log(n);
  ReverseCounting1(++n);
}

// -----------------------------------------
function ReverseCounting2(n) {
  if (n < 1) return;

  ReverseCounting2(--n);
  console.log(n + 1);
}

// -----------------------------------------
function SumOfNumbers(n) {
  if (n === 1) return 1;

  return n + SumOfNumbers(--n);
}

// -----------------------------------------
function FactorialNumber(n) {
  if (n === 1) return 1;

  return n * FactorialNumber(--n);
}

// -----------------------------------------
SimpleCounting(num);

console.log("=".repeat(10));
ReverseCounting1(1);

console.log("=".repeat(10));
ReverseCounting2(5);

console.log("=".repeat(10));
console.log("SumOfNumbers : ", SumOfNumbers(5));

console.log("=".repeat(10));
console.log("FactorialNumber : ", FactorialNumber(5));
