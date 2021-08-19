function getFiniteNumbers(arr) {
  return arr.filter(index => Number.isFinite(index));
}
console.log(getFiniteNumbers([1, '2', 3, 8, 79]));

function getFiniteNumbersV2(arr) {
  return arr.filter(index => isFinite(index));
}
console.log(getFiniteNumbersV2([1, '2', NaN, 3, 8, 79]));

function getNaN(arr) {
  return arr.filter(index => Number.isNaN(index));
}
console.log(getNaN([1, '2', NaN, undefined, 3, 8, 79]));

function getNaNV2(arr) {
  return arr.filter(index => isNaN(index));
}
console.log(getNaNV2([1, '2', NaN, undefined, 3, 8, 79]));

function getIntegers(arr) {
  return arr.filter(index => Number.isInteger(index));
}
console.log(getIntegers([1.8, '2', NaN, undefined, 3, 8, 79]));
