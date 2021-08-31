/*eslint-disable max-classes-per-file*/

export class User {
  // put your code here
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  // put your code here
  constructor(users) {
    this._users = Object.freeze(users);
  }
  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(el => el._name);
  }

  getUserIds() {
    return this._users.map(el => el._id);
  }

  getUserNameById(userId) {
    let findById = this._users.find(el => el._id === userId);
    return findById._name;
  }
}

// examples
// const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
// console.log(user.id); // ===> '1'
// console.log(user.name); // ===> 'Tom'
// console.log(user.sessionId); // ===> 'session-id'
// user._name = 'Bob';
// console.log(user._name);
// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
const user1 = new User(28, 'Ann', 254);
const user2 = new User(25, 'Bob', 256);
const user3 = new User(26, 'Tom', 253);
const users = [user1, user2, user3];
console.log(users);
console.log(user1.name);
console.log(users.getUserIds);
