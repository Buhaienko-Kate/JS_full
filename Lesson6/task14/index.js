const getSubArray = (arr, numberOfElements) => {
  // put your code here
  let newArr = arr.slice();
  newArr.length = numberOfElements;
  return newArr;
};
console.log(getSubArray([11, 2, 5, 6], 2));
