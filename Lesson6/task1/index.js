function getArrayBounds(arr) {
  // put your code here
  let arrayBounds = [];
  if (!Array.isArray(arr)) {
    return null;
  } else {
    arrayBounds.push(arr.length, arr[0], arr[arr.length - 1]);
  }
  return arrayBounds;
}
console.log(getArrayBounds('nj'));
