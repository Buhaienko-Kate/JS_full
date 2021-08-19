function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  } else {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[i] > array[j]) {
          let tmp = array[i];
          array[i] = array[j];
          array[j] = tmp;
        }
      }
      newArray.push(array[i]);
    }
    return array;
  }
}
console.log(sortAsc([5, 6, 1]));

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  } else {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[i] < array[j]) {
          let tmp = array[i];
          array[i] = array[j];
          array[j] = tmp;
        }
      }
      newArray.push(array[i]);
    }
    return array;
  }
}
console.log(sortDesc([5, 6, 1]));
