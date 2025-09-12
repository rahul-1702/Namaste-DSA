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

function optimiseSolution(price){
    let diff = 0;
    let min = price[0];
    for(let i = 1; i < price.length; i++){
        if(price[i] - min > diff){
            diff = price[i] - min;
        }

        if(price[i] < min){
            min = price[i];
        }
    }

    return diff;
}


// const arr = [7, 6, 4, 3, 1];
const arr = [7, 1, 5, 3, 6, 4];

console.log(optimiseSolution(arr));
