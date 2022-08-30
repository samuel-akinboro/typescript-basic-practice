"use strict";
let character = 'ben';
/*
  re-assigning a new value to the variable character
  that is not a type of string will throw an error
*/
// declaring the data type of a parameter in functions
const multiply = (val) => val * Math.PI;
multiply(10);
// array practice
const arr = ['aron', 2];
/*
arr.push({}) Argument of type '{}' is not assignable to parameter of type 'string | number'.
*/
// explicit types
let food;
let isLoggedIn;
food = 'Pudding';
isLoggedIn = true;
// union types (mixed values)
// array
let authors = []; // array that can only accept string values
let mixed = []; // array that accepts only string and number values
let uid;
// objects
let userOne = { name: 'book' };
let users;
// dynamic (any) types
let value;
value = 'name';
value = 17;
// let details: any[] = []
// functions
let divide;
const add = (a, b, c) => {
    return a + b;
};
console.log(add(1, 2));
function userDetails(user) {
    console.log(user.name);
}
// function signatures
let getDetails;
getDetails = (name, address) => {
    console.log(`${name} lives at ${address}`);
};
// type literals
// function parameter that only accepts specific values
const drive = (s, direction) => {
    console.log(s, direction);
};
drive('sam', 'up');
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
    // ...
}
configure({ width: 100 });
configure("auto");
