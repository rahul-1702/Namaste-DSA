/* 

1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 

*/


function Pattern(size) {
  for (let i = 0; i < size; i++) {
    let line = "";
    for (let j = 0; j < size - i; j++) {
        line = line + (j + 1) + " ";
    } 
    console.log(line);
  }
}

Pattern(5)