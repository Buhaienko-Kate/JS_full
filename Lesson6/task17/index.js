function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  } else {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!newArray.includes(array[i])) {
        newArray.push(array[i]);
      }
    }
    return newArray.length;
  }
}
console.log(uniqueCount([2, 2, 65, 8]));
