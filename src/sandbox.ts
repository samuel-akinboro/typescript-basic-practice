let character = 'ben';
/* 
  re-assigning a new value to the variable character 
  that is not a type of string will throw an error
*/

// declaring the data type of a parameter in functions

const multiply = (val: number) => val * Math.PI
multiply(10);

// array practice
const arr = ['aron', 2];
/*
arr.push({}) Argument of type '{}' is not assignable to parameter of type 'string | number'.
*/

// explicit types
let food: string;
let isLoggedIn: boolean

food = 'Pudding'
isLoggedIn = true

// union types (mixed values)
// array
let authors: string[] = [] // array that can only accept string values
let mixed: (string|number)[] = [] // array that accepts only string and number values
let uid: string|number

// objects
let userOne: object = {name: 'book'}

let users: {
  name: string,
  age: number
}

// dynamic (any) types
let value: any;
value = 'name'
value = 17

let details: any[] = []

// functions
let divide: Function;

const add = (a: number, b: number, c?: number | string):number => {
  return a + b
}

console.log(add(1, 2)) 

// type aliases
type stringOrNum = string | number
type objWithName = {name: string, id: stringOrNum}

function userDetails (user: objWithName) {
  console.log(user.name)
}


// function signatures
let getDetails: (n: string, o: string) => void

getDetails = (name: string, address: string) => {
  console.log(`${name} lives at ${address}`)
}