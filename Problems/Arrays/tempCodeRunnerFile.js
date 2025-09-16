i = 0; i < arr.length; i++) {
    if (!temp[arr[i]]) {
      temp[arr[i]] = 1;
    } else {
      temp[arr[i]] = temp[arr[i]] + 1;
    }
  }

  return +Object.keys(temp).filter((x) => temp[x] === 1)[0];
}