// one Rabbit at month 0 then multiply 2 every month. how many rabbit after given month ?
// month = 5 => 32

function rabbitCount(m) {
  if (m === 1 || m === 0) {
    return m + 1;
  }

  return 2 * rabbitCount(m - 1);
}

let month = 5;

console.log(rabbitCount(month));
