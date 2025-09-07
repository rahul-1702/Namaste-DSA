/*

    1
   1 0
  1 0 1
 1 0 1 0
1 0 1 0 1

*/

function Pattern(size) {
  for (let i = 0; i < size; i++) {
    let line = "";
    let toggle = 1;
    for (let j = 0; j <= size; j++) {
      if (j < size - i) {
        line = line + " ";
      } else {
        line = line + toggle + " ";

        if (toggle === 1) {
          toggle = 0;
        } else {
          toggle = 1;
        }
      }
    }

    console.log(line);
  }
}

Pattern(5);
