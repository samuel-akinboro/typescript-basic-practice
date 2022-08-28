// classes
class Invoice {
  readonly client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c
    this.details = d
    this.amount = a
  }

  format() {
    return `${this.client} owes \$${this.amount} for ${this.details}`
  }
}

const invOne = new Invoice('bayo', 'bandek blog', 300)

let invoices: Invoice[] = [];
invoices.push(invOne)
console.log(invOne.format())

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