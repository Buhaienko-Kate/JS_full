/* eslint-disable prefer-object-spread */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function mergeObjectsV1(obj1, obj2) {
  // put your code here
  const copyObj1 = Object.assign({}, obj1);
  return Object.assign(copyObj1, obj2);
}

function mergeObjectsV2(obj1, obj2) {
  // put your code here
  const copyObj2 = Object.assign({}, obj2);
  return Object.assign(copyObj2, obj1);
}

function mergeObjectsV3(obj1, obj2) {
  // put your code here
  return { ...obj1, ...obj2 };
}

function mergeObjectsV4(obj1, obj2) {
  // put your code here
  return { ...obj2, ...obj1 };
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 19,
  student: false,
};
// console.log(mergeObjectsV1(obj1, obj2));
console.log(mergeObjectsV4(obj1, obj2));
console.log(obj2);

// mergeObjectsV1(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
// mergeObjectsV2(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }
// mergeObjectsV3(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
// mergeObjectsV4(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }
