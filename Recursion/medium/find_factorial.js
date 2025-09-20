// num = 5 => 120

function findFactorial(num) {
  if (num === 1) {
    return 1;
  }

  return num * findFactorial(num - 1);
}

let num = 5;

console.log(findFactorial(num));
