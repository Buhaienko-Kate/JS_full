function buildObject(keysList, valuesList) {
  // put you code here
  return keysList.reduce((acc, key, vulue) => ({ ...acc, [key]: valuesList[vulue] }), {});
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
console.log(result);
