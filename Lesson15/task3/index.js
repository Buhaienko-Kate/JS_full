// input: none
// output: object
export const createLogger = () => {
  const result = [];
  return {
    warn: text => {
      result.push({
        message: text,
        dateTime: new Date(),
        type: 'warn',
      });
    },
    error: text => {
      result.push({
        message: text,
        dateTime: new Date(),
        type: 'error',
      });
    },
    log: text => {
      result.push({
        message: text,
        dateTime: new Date(),
        type: 'log',
      });
    },
    getRecords: type => {
      if (type == undefined) {
        return result.sort((a, b) => b.dateTime - a.dateTime);
      } else {
        return result.filter(el => el.type == type).sort((a, b) => b.dateTime - a.dateTime);
      }
    },
  };
};

const logger = createLogger();
logger.log('Usser logged in');
logger.warn('User try to restrictedpage');
logger.log('User logged out');
logger.error('Unexpected error on the site');

console.log(logger.getRecords('log'));
console.log(logger.getRecords('warn'));
console.log(logger.getRecords('error'));
console.log(logger.getRecords());
