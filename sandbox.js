var character = 'ben';
/*
  re-assigning a new value to the variable character
  that is not a type of string will throw an error
*/
// declaring the data type of a parameter in functions
var multiply = function (val) { return val * Math.PI; };
multiply(10);
// array practice
var arr = ['aron', 2];
/*
arr.push({}) Argument of type '{}' is not assignable to parameter of type 'string | number'.
*/
// explicit types
var food;
var isLoggedIn;
food = 'Pudding';
isLoggedIn = true;
