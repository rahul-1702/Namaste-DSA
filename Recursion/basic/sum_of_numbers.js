// num = 5 => 15

function SumOfNumbers(n) {
  if (n === 1) return 1;

  return n + SumOfNumbers(--n);
}

let num = 5;

console.log(SumOfNumbers(num));
