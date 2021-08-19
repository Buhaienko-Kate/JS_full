// function filterNames(arr, text) {
//   return arr.filter(function (el) {
//     if (el.length > 5) {
//       return el.includes(text);
//     }
//   });
// }

function filterNames(arr, text) {
  return arr.filter(function (el) {
    if (el.length > 5 && el.includes(text)) {
      return el;
    }
  });
}
console.log(
  filterNames(
    ['John', 'Olivya', 'Oleksandr', 'Emanual', 'Vanya', 'Nastya'],
    'ya'
  )
);
console.log(
  filterNames(
    ['John', 'Olivya', 'Oleksandr', 'Emanual', 'Vanya', 'Nastya'],
    'ya'
  )
);
