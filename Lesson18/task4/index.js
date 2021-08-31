export function saveCalls(func) {
  function withMemory(...arg) {
    withMemory.calls.push(arg);
    return func.apply(this, arguments);
  }
  withMemory.calls = [];
  return withMemory;
}

function test(a, b) {
  return Math.sqrt(a * a + b * b);
}
const testWithMemory = saveCalls(test);
testWithMemory(8, 2);
testWithMemory(5, 3);
console.log(testWithMemory.calls);
