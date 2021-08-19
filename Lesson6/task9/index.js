function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    let arrCopy = arr.slice();
    return arrCopy.reverse();
  }
}
console.log(reverseArray([2, 3, 4, 5, 6]));
