function getTotalPrice(arr) {
  let sum = 0;
  arr.forEach(el => (sum += el));
  return '$' + Math.floor(sum * 100) / 100;
}
console.log(getTotalPrice([1.5, 2.6, 3.8597, 4]));
