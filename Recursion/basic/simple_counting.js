// num = 5 => 1, 2, 3, 4, 5

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

let num = 5;

ReverseCounting1(1);
console.log("=".repeat(20));
ReverseCounting2(num);
