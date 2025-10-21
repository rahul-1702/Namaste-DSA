function largestOddNumber(num) {
  let max = 0;
  for (let i = 0; i < num.length; i++) {
    let str = num[i];
    if (+str % 2 === 1) {
      max = +str;
    }
    for (let j = i; j < num.length; j++) {
      str = str + num[j];
      if (+str > max && +str % 2 === 1) {
        max = +str;
      }
    }
  }

  return max;
}

let num = "34567";

console.log(largestOddNumber(num));
