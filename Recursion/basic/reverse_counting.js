// num = 5 => 5, 4, 3, 2, 1

function ReverseCounting(n) {
  if (n < 1) return;

  console.log(n);
  ReverseCounting(--n);
}

let num = 10;

ReverseCounting(num);
