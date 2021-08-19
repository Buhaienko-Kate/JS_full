function cleanTransactionsList(arrTransactions) {
  return arrTransactions
    .map(el => {
      return Number(el);
    })
    .filter(element => {
      if (typeof element === 'number') {
        return element;
      }
    })
    .map(num => {
      let round = Math.round(num * 100) / 100;
      return '$' + round.toFixed(2);
    });
}
transactions = ['1.258', ' 2 ', '12k'];
console.log(cleanTransactionsList(transactions));
// '$' + String(num));
