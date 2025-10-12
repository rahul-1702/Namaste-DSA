function RightUpTriangle(size) {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      if (i + j < size - 1) row = row + "  ";
      else row = row + "* ";
    }
    console.log(row);
  }
}

let size = 5;
RightUpTriangle(size);
