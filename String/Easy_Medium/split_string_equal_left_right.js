function splitLeftRight(str) {
  let cL = 0;
  let cR = 0;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "L") {
      cL++;
    } else {
      cR++;
    }

    if (cL === cR) {
      count++;
      cL = 0;
      cR = 0;
    }
  }

  return count;
}

function splitLeftRightOptimized(str) {
  let check = 0;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "L") check++;
    else check--;

    if (check === 0) count++;
  }

  return count;
}

let str1 = "LLLRRRLRRL";
let str2 = "LRLLRRLRLR";

console.log(splitLeftRight(str1));
console.log(splitLeftRight(str2));
console.log("Optimized :", splitLeftRightOptimized(str1));
console.log("Optimized :", splitLeftRightOptimized(str2));
