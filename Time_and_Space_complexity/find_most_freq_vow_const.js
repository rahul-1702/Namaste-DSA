function Result(str) {
  let vMap = new Map();
  let cMap = new Map();
  for (let i = 0; i < str.length; i++) {
    let s = str[i].toLowerCase();

    if ("aeiou".includes(s)) {
      if (vMap.has(s)) {
        vMap.set(s, vMap.get(s) + 1);
      } else {
        vMap.set(s, 1);
      }
    } else {
      if (cMap.has(s)) {
        cMap.set(s, cMap.get(s) + 1);
      } else {
        cMap.set(s, 1);
      }
    }
  }

  return (
    (cMap.size ? Math.max(...cMap.values()) : 0) +
    (vMap.size ? Math.max(...vMap.values()) : 0)
  );
}

const str = "Successes";

console.log(Result(str));
