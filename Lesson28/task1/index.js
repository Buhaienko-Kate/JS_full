export const calc = initialvalue => {
  let result = initialvalue;

  const calculator = {
    result() {
      return result;
    },
    add(value) {
      result += value;
      return this;
    },
    subtract(value) {
      result -= value;
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },

    div(value) {
      result /= value;
      return this;
    },
  };

  return calculator;
};

const result = calc(3).add(2).mult(4).div(10).substract(5).result();
console.log(result);
const result1 = calc(3).mult(4).div(10).substract(5).add(2).result();
console.log(result1);
