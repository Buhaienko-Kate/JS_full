const users = {
  'John Doe': 19,
  Tom: 17,
  Bob: 18,
};
// const getAdults = (userObj) => {
//   const userArray = Object.entries(userObj);
//   const filteredUserArray = userArray.filter((user) => user[1] >= 18);
//   const userName = filteredUserArray.map((user) => user[0]);

//   return userName;
// };
// console.log(getAdults(users));

const getAdults = userObj =>
  Object.entries(userObj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);
console.log(getAdults(users));
