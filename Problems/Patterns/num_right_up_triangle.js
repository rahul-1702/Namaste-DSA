/*

        1 
      2 2 
    3 3 3 
  4 4 4 4 
5 5 5 5 5 

*/ 

function rectanglePattern(size) {
  for (let i = 0; i < size; i++) {
    let line = "";
    for (let j = 0; j <= size; j++) {
      if (j < size - i) {
        line = line + "  ";
      } else {
        line = line + (i + 1) + " ";
      }
    }
    console.log(line);
  }
}

rectanglePattern(5)