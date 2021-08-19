// const getTotalRevenue = transactions => {
//   // put your code here
//   let sum = 0;
//   let res = Object.entries(transactions);
//   res.forEach(users => (sum += users[1].amount));
//   return sum;
// };
const getTotalRevenue = transactions => {
  // put your code here
  let sum = 0;
  Object.entries(transactions).forEach(users => (sum += users[1].amount));
  return sum;
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];
console.log(getTotalRevenue(dayTransactions));
const result = getTotalRevenue(dayTransactions); // ==> 310
