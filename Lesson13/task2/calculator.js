export const getSquaredArray = arr => {
  return arr.map(el => el * el);
};

export const getOddNumbers = arr => {
  return arr.filter(el => {
    if (el % 2 === 1) {
      return el;
    }
  });
};

export default (a, b) => a + b;
