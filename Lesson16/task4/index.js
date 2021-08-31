/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой задачи он отключен аннотацией eslint-disable */

function bar() {
  if (!foo) {
    var foo = 10;
  }

  return foo;
}

var foo = bar();
var foo = 1;
export default foo;
console.log(foo);
