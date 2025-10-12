function Rectangle(size) {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}

let size = 4;
Rectangle(size);
