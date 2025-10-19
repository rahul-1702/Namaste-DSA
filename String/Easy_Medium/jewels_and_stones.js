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
function JewelsAndStonesOptimized2(jew, stn) {
  let count = 0;
  let jSet = new Set();
  for (let i = 0; i < jew.length; i++) {
    jSet.add(jew[i]);
  }

  for (let i = 0; i < stn.length; i++) {
    if (jSet.has(stn[i])) count++;
  }

  return count;
}
let jewels = "abBaaC";
let stones = "aAAbbCcbb";
console.log(JewelsAndStones(jewels, stones));
console.log(JewelsAndStonesOptimized(jewels, stones));
console.log(JewelsAndStonesOptimized2(jewels, stones));
