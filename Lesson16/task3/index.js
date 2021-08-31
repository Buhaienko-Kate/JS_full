export function createArrayOfFunctions(num) {
  let arr = [];
  if (num === undefined) {
    return arr;
  } else if (typeof num !== 'number') {
    return null;
  } else {
    for (let i = 0; i < num; i += 1) {
      arr[i] = function () {
        return i;
      };
    }
    return arr;
  }
}

console.log(createArrayOfFunctions('po'));
console.log(createArrayOfFunctions());
console.log(createArrayOfFunctions(9)[8]());
