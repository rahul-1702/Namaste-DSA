// Code to Best Time Time to Buy Sell Stock

function bestTimeBuySellStock(price) {
  let diff = 0;
  for (let x = 0; x < price.length; x++) {
    for (let i = x; i < price.length; i++) {
      if (price[i] > price[x] && price[i] - price[x] > diff) {
        diff = price[i] - price[x];
      }
    }
  }

  return diff;
}

const arr = [7, 1, 5, 8, 6, 4];

console.log(bestTimeBuySellStock(arr));