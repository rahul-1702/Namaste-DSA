// num = 32 => true

function isPowerOfTwo(n) {
  if (n === 1 || n === 0) {
    return true;
  }

  if (n % 2 === 0) {
    return isPowerOfTwo(Math.floor(n / 2));
  } else {
    return false;
  }
}

let num = 32;

console.log(isPowerOfTwo(num));
