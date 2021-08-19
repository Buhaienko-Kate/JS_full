function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    return arr.slice().map(function (el) {
      return el * el;
    });
  }
}
console.log(squareArray([2, 4, 6]));
