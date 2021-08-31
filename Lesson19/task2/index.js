const vehicle = {
  name: 'Argo',

  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};
const ship = {
  __proto__: vehicle,
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    ship.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};
export function getOwnProps(obj) {
  let propsArr = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      propsArr.push(prop);
    }
  }

  return propsArr.filter(el => {
    return typeof obj[el] !== 'function';
  });
}

console.log(getOwnProps(ship));
console.log(getOwnProps(vehicle));
console.log(Object.keys(ship));
