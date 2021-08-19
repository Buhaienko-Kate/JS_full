function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    if (Math.max(...arr) + Math.min(...arr) > 1000) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(checker([2, 90, 1000]));
