import { createLogger } from './index.js';

it('has to log out error', () => {
  const logger = createLogger();
  logger.error('Unexpected error on the site');
  const result = logger.getRecords('error');

  expect(result[0].message).toEqual('Unexpected error on the site');
});
it('has to log out warn', () => {
  const logger = createLogger();
  logger.warn('User try to restrictedpage');
  const result = logger.getRecords('warn');

  expect(result[0].type).toEqual('warn');
});
it('has to log out error', () => {
  const logger = createLogger();
  logger.log('User logged out');
  const result = typeof logger.getRecords('log');

  expect(result).toEqual('object');
});
