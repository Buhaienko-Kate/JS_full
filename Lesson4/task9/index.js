let sum = 0;
for (let i = 1; i <= 1000; i++) {
  sum += i;
}
let div = Math.trunc(sum / 1234);
let mods = sum % 1234;
console.log(div > mods);
console.log(sum);
console.log(mods);
console.log(div);
