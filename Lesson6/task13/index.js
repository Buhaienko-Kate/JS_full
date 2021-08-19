function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i++) {
    if (clients[i] === client) {
      for (let j = 0; j < balances.length; j++) {
        j = i;
        if (balances[j] > amount) {
          return balances[j] - amount;
        } else {
          return -1;
        }
      }
    }
  }
}
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
