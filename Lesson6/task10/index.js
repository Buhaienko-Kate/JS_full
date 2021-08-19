function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    let arrCopy = arr.slice();
    return arrCopy;
  }
}
console.log(cloneArr([2, 3, 5]));
