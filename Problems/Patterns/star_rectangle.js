/*

X X X X X
X X X X X
X X X X X
X X X X X

*/ 


function rectanglePattern(row, col) {
 
  for(let i = 0; i < row; i++){
    let line = '';
    for(let j = 0; j < col; j++){
      line += 'X ';
    }
    console.log(line);
  }

}

rectanglePattern(4, 5)