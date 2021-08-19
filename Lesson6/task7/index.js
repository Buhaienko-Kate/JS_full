function checkSum(arr) {
  let sum = 0;
  if (!Array.isArray(arr)) {
    return null;
  } else {
    for (let index = 0; index < arr.length; index++) {
      sum += arr[index];
    }
    if (sum > 100) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(checkSum([1, 10, 99, 89]));
