export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(string) {
    let arr = string.split(' ');
    this.firstName = arr[0];
    this.lastName = arr[1];
  },
};
console.log(user.getFullName());
console.log(user.setFullName('John Doe'));
