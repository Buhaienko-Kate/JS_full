// const sum = (a, b) => a + b;

// const sum = a => b => a + b;

// const add3 = sum(3);

// const result = add3(5);

// console.log(result);

export const mult = arg1 => arg2 => arg1 * arg2;

const res = mult(5)(4);
console.log(res);

export const twice = mult(2);
console.log(twice(7));

export const triple = mult(3);
console.log(triple(9));
