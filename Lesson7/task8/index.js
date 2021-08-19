// const cloneArr = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   } else {
//     return arr.slice();
//   }
// };

const cloneArr = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    return [...arr];
  }
};
console.log(cloneArr([1, 2, 3]));
