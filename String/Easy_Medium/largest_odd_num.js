function largestOddNumber(num) {
  let n = num.length;
  while (num !== "") {
    num = num.slice(0, n--);
    if (+num % 2 === 1) {
      return num.slice(0, n + 1);
    }
  }

  return "";
}

let num = "435102";

console.log(largestOddNumber(num));
