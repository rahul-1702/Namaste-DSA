function RightDownTriangle(size) {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      if (i > j) row = row + "  ";
      else row = row + "* ";
    }
    console.log(row);
  }
}

let size = 5;
RightDownTriangle(size);
