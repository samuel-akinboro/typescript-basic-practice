"use strict";
// Modifiers
// readonly - makes the variables in classes to be unmodifiable after initialization, both in the class and globally
// private - makes the variable to be only modified in the class and unchangeable outside the class
// public - (default) can be modified globally and within the class
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
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
exports.Invoice = Invoice;
