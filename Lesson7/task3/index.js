// const flatArray = (arr) => {
//   // put your code here
//   const flatArray = arr.reduce(function (acc, num) {
//     return acc.concat(num);
//   }, []);
//   return flatArray;
// };

const flatArray = (arr) => {
  //   // put your code here

  return arr
    .slice()
    .reduce(function (acc, num) {
      return acc.concat(num);
    }, [])
    .sort((a, b) => a - b);
};
console.log(flatArray([1, 3, 8, [1, 5, 6]]));
