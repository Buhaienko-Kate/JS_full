export const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};
export const ship = {
  __proto__: vehicle,
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};
// or
// Object.setPrototypeOf(ship, vehicle);
// __proto__ убираем из объекта
console.log(ship.startMachine());
console.log(ship.stopMachine());
