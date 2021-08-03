// strict equality testing
// test that both operands have the same value and are of the same type
console.log(1 === 1); // true
console.log('1' === 1); // false

// loose equality testing
// test that both operands have the same value
// in fact the string is converted to a number and then a strict test is performed
console.log('1' == 1); // true

// NB: generally you should prefer strict testing; React will enforce this

// everything in JS is truthy or falsey
// falsey values:
// false
// 0
// '' (empty string)
// undefined
// null

// everything else is truthy including empty objects and empty arrays

var array = [];

if (array.length) {
    console.log('the array is not empty');
} else {
    console.log('the array is empty');
}