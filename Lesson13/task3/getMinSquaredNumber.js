export const getMinSquaredNumber = arr => {
  if (arr.length === 0 || !Array.isArray(arr)) {
    return null;
  } else {
    const absoluteValues = arr.map(el => Math.abs(el));
    let result = Math.min(...absoluteValues) ** 2;
    return result;
  }
};
