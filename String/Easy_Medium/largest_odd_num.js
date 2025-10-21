function largestOddNumber(num) {
  let i = num.length;
  while (num !== "") {
    let bit = num.slice(num.length - 1, num.length);
    if (+bit % 2 === 1) {
      return num.slice(0, i);
    }
    i--;
    num = num.slice(0, num.length - 1);
  }

  return "";
}

let num = "42412";

console.log(largestOddNumber(num));
