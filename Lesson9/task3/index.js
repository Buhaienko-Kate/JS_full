const users = {
  'John Doe': 19,
  Tom: 17,
  Bob: 18,
};
// function getKeys(obj) {
//   // put you code here
//   const key = Object.keys(obj);
//   key.forEach(keys => console.log(keys));
// }
function getKeys(obj) {
  // put you code here
  Object.keys(obj).forEach(keys => console.log(keys));
}
getKeys(users);
