'use strict';

const withdraw = (clients, balances, client, amount) => {
  //put your code here
  const clientIndex = clients.findIndex(clientName => clientName === client);
  const clientBalance = balances[clientIndex];
  if (clientBalance > amount) {
    return clientBalance - amount;
  } else {
    return -1;
  }
};

//example 1:

//input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 100));
//output
//37
//и массив balances должен быть [1400, 37, -6]

//example 2:

//input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

//output
//-1
//и массив balances должен быть [1400, 87, -6]
