rooms = {
  room1: [{ name: 'Jack' }, { name: 'Rfte' }, { name: 'Jack' }, { name: 'Kate' }, { name: 'Jack' }],
  room2: [{ name: 'Paul' }],
};
const getPeople = obj => {
  // put your code here
  return Object.values(obj)
    .flat()
    .map(users => users.name);
};
console.log(getPeople(rooms));
