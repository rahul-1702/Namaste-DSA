function wordsContainingLetter(arr, ch) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let s = arr[i].trim();
    for (let j = 0; j < s.length; j++) {
      if (s[j] === ch) {
        res.push(arr[i]);
        break;
      }
    }
  }

  return res;
}

let arr = [" Leet ", "world ", "Code "];
let letter = "e";

console.log(wordsContainingLetter(arr, letter));
