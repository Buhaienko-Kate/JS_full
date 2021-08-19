const increaseEvenEl = (arr, delta) => {
  //put your code here
  let increaseEvenArr = [];
  if (!Array.isArray(arr)) {
    return null;
  } else {
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] % 2 === 0) {
        increaseEvenArr.push(arr[index] + delta);
      } else {
        increaseEvenArr.push(arr[index]);
      }
    }
    return increaseEvenArr;
  }
};

//example 1:

//input
const arr = [2, 5, 6, 8, 11, 9, 4];
const delta = 20;
//output
//[22, 5, 26, 28, 11, 9, 24]
console.log(increaseEvenEl(arr, delta));
