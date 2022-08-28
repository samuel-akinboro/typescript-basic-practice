"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes \$${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('bayo', 'bandek blog', 300);
let invoices = [];
invoices.push(invOne);
console.log(invOne.format());
// Modifiers
// readonly - makes the variables in classes to be unmodifiable after initialization, both in the class and globally
// private - makes the variable to be only modified in the class and unchangeable outside the class
// public - (default) can be modified globally and within the class
// class Invoice {
//   readonly client: string;
//   private details: string;
//   public amount: number;
//   constructor(c: string, d: string, a: number) {
//     this.client = c
//     this.details = d
//     this.amount = a
//   }
//   format() {
//     return `${this.client} owes \$${this.amount} for ${this.details}`
//   }
// }
// invOne.client = 'ben'
// DOM
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
