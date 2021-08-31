'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {
  // put your code here
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.id = `${Math.random()}`;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = null;
  }
  checkPrice() {
    if (this.price > 1000) {
      return true;
    } else {
      return false;
    }
  }
  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }
  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    } else {
      return false;
    }
  }
}
const order1 = new Order(189, 'Odessa', 'Sell');
const order2 = new Order(175, 'Lviv', 'Buy');
const order3 = new Order(189, 'Kiev', 'Buy');
const order4 = new Order(175, 'Kharkiv', 'Sell');
const order5 = new Order(189, 'New York', 'non');
console.log(order1);
console.log(order2);
console.log(order3);
console.log(order4);
console.log(order5);
console.log(order5.isValidType());

console.log(order5.confirmOrder());
console.log(order5.dateConfirmed);
