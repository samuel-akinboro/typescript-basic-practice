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

// classes
export class Invoice {
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