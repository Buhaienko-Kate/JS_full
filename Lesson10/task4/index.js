function getMaxAbsoluteNumber(arr) {
  if (arr.length === 0 || !Array.isArray(arr)) {
    return null;
  } else {
    const absoluteValues = arr.map(el => Math.abs(el));
    return Math.max(...absoluteValues);
  }
}

console.log(getMaxAbsoluteNumber([]));
