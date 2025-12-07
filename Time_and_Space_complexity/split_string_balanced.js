// Split string in balanced string

function BalancedString(str) {
  let check = 0;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "L") check++;
    else check--;

    if (check === 0) count++;
  }

  return count;
}

let str = "LLLRLRRRLLRR";

console.log(BalancedString(str));
