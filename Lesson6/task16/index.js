function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  } else {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!newArray.includes(array[i])) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
}
console.log(removeDuplicates([2, 2, 65, 8]));
