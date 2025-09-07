/*

1
0 1
0 1 0
1 0 1 0
1 0 1 0 1

*/

function Pattern(size) {
  let toggle = 1;
  for (let i = 0; i < size; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
      line = line + toggle + " ";

      if (toggle === 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }

    console.log(line);
  }
}

Pattern(5);
