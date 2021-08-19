function getSum(begin, end) {
  let sum = 0;
  for (let i = begin; i <= end; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(getSum(2, 6));
