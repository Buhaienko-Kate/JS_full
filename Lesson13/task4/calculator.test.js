import { calc } from './calculator.js';

it('should get sum of numbers', () => {
  let result = calc('1 + 3');
  expect(result).toEqual('1 + 3 = 4');
});

it('should get difference of numbers', () => {
  let result = calc('8 - 3');
  expect(result).toEqual('8 - 3 = 5');
});

it('should get multiplication of numbers', () => {
  let result = calc('2 * 3');
  expect(result).toEqual('2 * 3 = 6');
});

it('should get devision of numbers', () => {
  let result = calc('8 / 4');
  expect(result).toEqual('8 / 4 = 2');
});

it('should get calc of numbers if not a string', () => {
  let result = calc(8 / 4);
  expect(result).toEqual(null);
});
