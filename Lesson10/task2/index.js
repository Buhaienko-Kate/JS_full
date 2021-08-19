function getParsedIntegers(arr) {
  return arr.map(el => Number.parseInt(el));
}
console.log(getParsedIntegers([1.2, 5, 3.6]));

function getParsedIntegersV2(arr) {
  return arr.map(el => parseInt(el));
}
console.log(getParsedIntegersV2([1.2, 5, 3.6]));

function getParsedFloats(arr) {
  return arr.map(el => Number.parseFloat(el));
}
console.log(getParsedFloats(['1.2px', 5, 3.6]));

function getParsedFloatsV2(arr) {
  return arr.map(el => parseFloat(el));
}
console.log(getParsedFloatsV2(['1.2px', 5, 3.6]));
