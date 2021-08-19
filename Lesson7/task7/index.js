function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    let increaseEvenElArr = [];
    arr.forEach(function (el) {
      if (el % 2 === 0) {
        increaseEvenElArr.push(el + delta);
      }
    });
    return increaseEvenElArr;
  }
}
console.log(increaseEvenEl([1, 2, 3, 4], 3));
