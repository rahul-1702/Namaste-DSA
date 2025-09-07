/*

X X X X X
X X X X
X X X
X X
X

*/


function Pattern(size) {
  for (let i = 0; i < size; i++) {
    let line = "";
    for (let j = 0; j < size - i; j++) {
        line = line + "X ";
      }
    console.log(line);
  }
}

Pattern(5);
