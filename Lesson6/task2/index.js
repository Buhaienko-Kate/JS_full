function getSum(arr) {
  // put your code here
  let sum = 0;
  if (!Array.isArray(arr)) {
    return null;
  } else {
    for (let index = 0; index < arr.length; ++index) {
      sum += arr[index];
    }
    return sum;
  }
}
// examples
getSum([1, 10, -10, 4]); // ==> 5
getSum([1]); // ==> 1
getSum([-8, 8]); // ==> 0
getSum(10, 12, 14); // ==> null
console.log(getSum([1, 10, -10, 4]));
