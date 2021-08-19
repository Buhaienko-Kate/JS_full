function compareSums(a, b, c, d) {
  return sum(a, b) > sum(c, d);
}
function sum(from, to) {
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  return sum;
}
console.log(sum(2, 7));
console.log(compareSums(2, 5, 4, 6));
