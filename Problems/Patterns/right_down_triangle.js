/*

        X
      X X
    X X X
  X X X X
X X X X X

*/

// function rectanglePattern(size) {
//   for(let i = 0; i < size; i++){
//     let line = '';
//     for(let j = 0; j < size - i; j++){
//         line = line + '  ';
//     }
//     for(let j = 0; j <= i; j++){
//         line = line + 'X ';
//     }
//     console.log(line);
//   }
// }

// function rectanglePattern(size) {
//   for (let i = 0; i < size; i++) {
//     let line = "";
//     for (let j = 0; j <= size; j++) {
//       if (j < size - i) {
//         line = line + "  ";
//       } else {
//         line = line + "X ";
//       }
//     }
//     console.log(line);
//   }
// }

// function rectanglePattern(size) {
//   for (let i = 0; i < size; i++) {
//     let line = "";
//     for (let j = 0; j <= size; j++) {
//       if (j <= i) {
//         line = line + "  ";
//       } else {
//         line = line + "X ";
//       }
//     }
//     console.log(line);
//   }
// }


function rectanglePattern(size) {
  for (let i = 0; i < size; i++) {
    let line = "";
    for (let j = 0; j < size - i; j++) {
        line = line + (j + 1) + " ";
    }
    console.log(line);
  }
}

rectanglePattern(5);
