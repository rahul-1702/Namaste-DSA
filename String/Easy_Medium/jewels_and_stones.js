// Jewels and Stones

function JewelsAndStones(jew, stn) {
  let count = 0;
  for (let i = 0; i < stn.length; i++) {
    for (let j = 0; j < jew.length; j++) {
      if (stn[i] === jew[j]) {
        count++;
        break;
      }
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

let jewels = "aAaaC";
let stones = "aAAbbCbb";

console.log(JewelsAndStones(jewels, stones));
console.log(JewelsAndStonesOptimized(jewels, stones));
