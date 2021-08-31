export const createCalculator = () => {
  // put your code here
  let result = 0;
  function add(num) {
    result += num;
    return result;
  }

  function decrease(num) {
    result -= num;
    return result;
  }

  function reset() {
    result = 0;
    return result;
  }

  function getMemo() {
    return result;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calc1 = createCalculator();
calc1.add(8);
console.log(calc1.getMemo());
const calc2 = createCalculator();
calc2.decrease(9);
console.log(calc2.decrease(12));
