"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invoice_js_1 = require("./modules/invoice.js");
const invOne = new invoice_js_1.Invoice('bayo', 'bandek blog', 300);
let invoices = [];
invoices.push(invOne);
console.log(invOne.format());
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
