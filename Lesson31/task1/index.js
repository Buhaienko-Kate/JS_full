'use strict';

export const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });
  return request;
};

requestUserData('user777').then(data => console.log(data));
requestUserData('broken').catch(err => console.log(err));

// requestUserData('broken')
//   .catch(error => {
//     console.log(error);
//     throw new Error('Error');
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
//   .finally(() => console.log('finally'));
