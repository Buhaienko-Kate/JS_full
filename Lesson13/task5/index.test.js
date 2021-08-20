import { reverseArray, withdraw, getAdults } from './index.js';

it('should reverse array', () => {
  let result = reverseArray([1, 2, 3]);
  expect(result).toEqual([3, 2, 1]);
});

it('should get null', () => {
  let result = reverseArray(1, 2, 3);
  expect(result).toEqual(null);
});

it('should get array without difference', () => {
  let result = reverseArray([1, 2, 3]) === [1, 2, 3];
  expect(result).toEqual(false);
});

it('should withdraw amount', () => {
  let result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it('should withdraw amount', () => {
  let result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 100);
  expect(result).toEqual(-1);
});

it('should withdraw amount', () => {
  let result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 100);
  expect(result).toEqual(1300);
});

it('should get adults', () => {
  let result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should get adults', () => {
  let result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});

it('should get adults', () => {
  let result = getAdults({ Ann: 56, Andrey: 7, 'John Doe': 19 });
  expect(result).toEqual({ Ann: 56, 'John Doe': 19 });
});
