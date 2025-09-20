function findFibonacciNumber(num) {
  if (num === 0 || num === 1) {
    return num;
  }

  let a = 0;
  let b = 1;
  let sum = 0;

  for (let i = 0; i < num - 1; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }

  return sum;
}

let num = 8;

console.log(findFibonacciNumber(num));
