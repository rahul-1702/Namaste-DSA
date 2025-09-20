// num = 8 => 21

function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

let num = 8;

console.log(fibonacci(num));
