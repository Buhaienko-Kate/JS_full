function swap(numbers) {
  // put your code here
  let copyNumbers = numbers.slice();
  const [start, ...rest] = copyNumbers;
  return [...rest, start];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  // put your code here
  let copyNumbers = numbers.slice();
  let newArr = [];
  for (let i = 0; i < copyNumbers.length; i++) {
    if (i != 0) {
      newArr.push(copyNumbers[i]);
    }
  }
  newArr.push(copyNumbers[0]);
  return newArr;
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
console.log(swap([1, 10, 9, 11]));
console.log(swapManual([1, 10, 9, 11]));
