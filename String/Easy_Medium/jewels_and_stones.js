// Jewels and Stones

function JewelsAndStones(jew, stn) {
  let count = 0;
  for (let i = 0; i < jew.length; i++) {
    for (let j = 0; j < stn.length; j++) {
      if (jew[i] === stn[j]) count++;
    }
  }

  return count;
}

function JewelsAndStonesOptimized(jew, stn) {
  let count = 0;
  for (let i = 0; i < stn.length; i++) {
    if (jew.includes(stn[i])) count++;
  }

  return count;
}

let jewels = "aA";
let stones = "aAAbbbb";

console.log(JewelsAndStones(jewels, stones));
console.log(JewelsAndStonesOptimized(jewels, stones));
