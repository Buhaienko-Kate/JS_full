export const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    return arr.slice().reverse();
  }
};
console.log(reverseArray([1, 2, 3, 4]));

export const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.findIndex(clientName => clientName === client);
  const clientBalance = balances[clientIndex];
  if (clientBalance > amount) {
    return clientBalance - amount;
  } else {
    return -1;
  }
};

export const getAdults = obj => {
  // put your code here
  let newObj = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
