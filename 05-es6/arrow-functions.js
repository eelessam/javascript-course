// ES5
function es5NamedSquare(num) {
    return num * num;
}

// ES5 (anonymous)
var es5AnonSquare = function(num) {
    return num * num;
}

// ES6 V1
// arrow functions have no function keyword and the arrow operator separates the param list form the body
const es6V1Square = (num) => {
    return num * num;
}

// ES6 V2
// if there is only one param then the round brackets may be omitted
const es6V2Square = num => {
    return num * num;
}

// ES6 V3
// if there is only one line of code then the braces may be omitted
// if you omit the braces you MUST omit the return keyword
// in this case the expression result is returned automatically
const es6V3Square = num => num * num;

// a simple use case - every array has a forEach method that accepts a function argument
// ES5
[1, 2, 3].forEach(function(n) {
    console.log(n);
});

// ES6
[1, 2, 3].forEach(n => console.log(n));