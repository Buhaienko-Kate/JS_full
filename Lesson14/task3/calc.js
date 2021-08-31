let result = 0;
export function add(num) {
  result += num;
  return result;
}

export function decrease(num) {
  result -= num;
  return result;
}

export function reset() {
  return (result = 0);
}

export function getMemo() {
  return result;
}
