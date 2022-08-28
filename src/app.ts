import { Invoice } from './modules/invoice.js'

const invOne = new Invoice('bayo', 'bandek blog', 300)

let invoices: Invoice[] = [];
invoices.push(invOne)
console.log(invOne.format())

// DOM
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.valueAsNumber
  )
})