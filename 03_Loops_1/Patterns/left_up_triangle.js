function LeftUpTriangle(size) {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}

let size = 9;
LeftUpTriangle(size);
