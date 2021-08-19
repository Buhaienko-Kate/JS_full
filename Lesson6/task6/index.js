function squareArray(arr) {
  // put your code here
  let squareArr = [];
  if (!Array.isArray(arr)) {
    return null;
  } else {
    for (let index = 0; index < arr.length; index++) {
      squareArr.push(arr[index] ** 2);
    }
    return squareArr;
  }
}

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
console.log(squareArray([10, 0, -4]));
