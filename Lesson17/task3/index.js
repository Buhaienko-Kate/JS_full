export function defer(func, ms) {
  return function () {
    setTimeout(() => func.call(this, ...arguments), ms);
  };
}

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  },
};
const deferUserSayHi = defer(user.sayHi, 1000);
deferUserSayHi.call({ name: 'Bob' });
