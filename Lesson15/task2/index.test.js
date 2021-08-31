import { createCalculator } from './index.js';

it('has to get sum', () => {
  const calculator1 = createCalculator();
  calculator1.add(25);
  const result = calculator1.getMemo();
  expect(result).toEqual(25);
});
