it('17 равно 17', () => {
  expect(17).toEqual(17);
});

it('18 не равно 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = arr => {
  return arr.filter(el => {
    if (el % 2 === 0) {
      return el;
    }
  });
};

it('should get even numbers', () => {
  let result = getEvenNumbers([1, 2, 3, 4, 5, 6]);
  expect(result).toEqual([2, 4, 6]);
});
