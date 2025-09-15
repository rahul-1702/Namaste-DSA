/*

        1
      2 2 2
    3 3 3 3 3
  4 4 4 4 4 4 4
5 5 5 5 5 5 5 5 5

*/

function Pattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = " ";
    let k = n - i;
    for (let j = 1; j <= i * 2; j++) {
        if(j === 1){
            row = row + "  ".repeat(k);
        }else{
            row = row + i + " ";
        }
    }
    console.log(row);
  }
}

Pattern(5);
