// Exchange Empty bottles
// bottles = 9, exchange = 3
// 9 / 3 = 3, 3 / 3 = 1
// Output = 9 + 3 + 1

function emptyBottles(bottles, exchange) {
  let sum = bottles;

  while (bottles >= exchange) {
    sum = sum + Math.floor(bottles / exchange);
    bottles = Math.floor(bottles / exchange) + Math.floor(bottles % exchange);
  }

  return sum;
}

function emptyBottlesOptimized(bottles, exchange) {
  return bottles + Math.floor((bottles - 1) / (exchange - 1));
}

let bottles = 6;
let exchange = 2;

console.log("Total bottles :", emptyBottles(bottles, exchange));
