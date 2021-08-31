export const event = {
  guests: [
    { name: 'Tom', age: 28, email: 'example@gmail.com' },
    { name: 'Bob', age: 18, email: 'example@gmail.com' },
    { name: 'Ann', age: 15, email: 'example@gmail.com' },
  ],
  message: 'Welcome to the party',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({ email, message: `Dear ${name}! ${this.message}` }));
  },
};
console.log(event.getInvitations());
