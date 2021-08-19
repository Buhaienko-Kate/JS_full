// function arrAverage(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   } else {
//     return (
//       arr.reduce(function (acc, num) {
//         return acc + num;
//       }) / arr.length
//     );
//   }
// }

function arrAverage(arr) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    return arr.reduce((acc, num) => acc + num) / arr.length;
  }
}
console.log(arrAverage([2, 5, 6, 3]));
