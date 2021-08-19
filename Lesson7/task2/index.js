// const sortDesc = (arr) => {
//   return arr.sort((a, b) => {
//     if (a < b) {
//       return 1;
//     }
//     return -1;
//   });
// };

// console.log(sortDesc([1, 5, 3, 8, 4, 6, 7]));

const sortDesc = (arr) => arr.slice().sort((a, b) => b - a);
console.log(sortDesc([1, 5, 3, 8, 4, 6, 7]));
