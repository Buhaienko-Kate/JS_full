function compareObjects(obj1, obj2) {
  // put your code here
  let keyObj1 = Object.keys(obj1);
  let keyObj2 = Object.keys(obj2);
  for (let i = 0; i < obj1.length; i += 1) {
    for (let j = 0; j < obj2.length; i += 1) {
      if (keyObj1[i] === keyObj2[j]) {
        return true;
      }
      return false;
    }
  }
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};
console.log(compareObjects(obj1, obj2));
compareObjects(obj1, obj2); // ==> false
compareObjects(obj2, obj3); // ==> false
compareObjects(obj1, obj4); // ==> true
