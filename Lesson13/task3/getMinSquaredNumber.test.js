import { getMinSquaredNumber } from './getMinSquaredNumber';

it('should get empty array', () => {
  let result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('should get string', () => {
  let result = getMinSquaredNumber('');
  expect(result).toEqual(null);
});

it('should get min squared number', () => {
  let result = getMinSquaredNumber([2, 3, 4, -8]);
  expect(result).toEqual(4);
});
