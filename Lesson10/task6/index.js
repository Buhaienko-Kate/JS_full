const getRandomNumbers = (length, from, to) => {
  // put your code here

  let arr = new Array(length);
  let min = Math.ceil(from);
  let max = Math.ceil(to);
  if (to - from < 1) {
    return null;
  } else {
    return arr.fill(Math.trunc(Math.random() * (max - min) + min));
  }
};
console.log(getRandomNumbers(5, 1.4, 3.22));
// examples
getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
