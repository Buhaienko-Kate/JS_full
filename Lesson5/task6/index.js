function getPrimes(num) {
  // put your code here

  for (let i = 2; i <= num; i++) {
    let flag = 1;
    if (i > 2 && i % 2 != 0) {
      for (let j = 3; j * j <= i; j += 2) {
        if (i % j === 0) {
          flag = 0;
          break;
        }
      }
    } else if (i != 2) {
      flag = 0;
    }
    if (flag === 1) {
      console.log(i);
    }
  }
}

getPrimes(20);
