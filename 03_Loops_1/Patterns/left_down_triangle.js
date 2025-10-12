function LeftDownTriangle(size) {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size - i; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}

let size = 5;
LeftDownTriangle(size);
