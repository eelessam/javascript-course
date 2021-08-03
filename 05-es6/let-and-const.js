// the main difference between var and let/const is that the latter is block scoped

// ES5
for (var i = 0; i < 10; i++) {
    // ignore
}
console.log(i); // 10

// ES6
for (let j = 0; j < 10; j++) {
    // ignore
}
// console.log(j); // ReferenceError

// ES5
var x = 1;
var x = 2;

// ES6
let y = 1;
// let y = 2; // SyntaxError

// NB: const implies a constant variable not a constant object
const obj = {a: 1};
// obj = {}; // TypeError
obj.a = 2;