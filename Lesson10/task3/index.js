function multiRound(num) {
  return [
    Math.floor(num * 100) / 100,
    Math.round(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    Number(num.toFixed(2)),
  ];
}
console.log(multiRound(-3.89574));
