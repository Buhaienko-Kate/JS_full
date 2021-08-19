/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */
const users = {
  'John Doe': 19,
  Tom: 17,
  Bob: 18,
};
function addPropertyV1(userData, userId) {
  // put your code here
  userData.id = userId;
  return userData;
}
console.log(addPropertyV1(users, '1235'));
// // put your code here
function addPropertyV2(userData, userId) {
  // put your code here
  let userIDArr = [];
  userIDArr.id = userId;
  const res = Object.assign(userData, userIDArr);
  return res;
}
console.log(addPropertyV2(users, '1235'));

// put your code here
function addPropertyV3(userData, userId) {
  // put your code here
  let userIdArr = [];
  userIdArr.id = userId;
  const copyUserData = Object.assign({}, userData);
  const res = Object.assign(copyUserData, userIdArr);
  return res;
}
console.log(users);
console.log(addPropertyV3(users, '1235'));

// put your code here
function addPropertyV4(userData, userId) {
  // put your code here

  return {
    ...userData,
    id: userId,
  };
}
console.log(users);
console.log(addPropertyV4(users, '1235'));

// examples
// const user = {
//   name: 'Sam',
// };
// addPropertyV1(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }
