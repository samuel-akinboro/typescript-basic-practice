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

// let details: any[] = []

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

// type literals

// function parameter that only accepts specific values

const drive = (s: string, direction: 'up' | 'down') => {
  console.log(s, direction)
}

drive('sam', 'up')

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");

// narrowing
// the process of refining types to more specific types than declared is called narrowing

const padLeft = (padding: number | string, input: string):string => {
  if(typeof padding === "number") {
    return " ".repeat(padding) + input
  }

  return padding + input
}

// discriminated unions

interface Circle {
  kind: 'circle',
  radius: number
}

interface Square {
  kind: 'square',
  sideLength: number
}

type Shape = Circle | Square

const getArea = (shape: Shape):number => {
  if(shape.kind === 'circle'){
    return Math.PI * shape.radius ** 2
  }
  else{
    return shape.sideLength ** 2
  }
}

console.log(getArea({kind: 'circle', radius: 10}))

