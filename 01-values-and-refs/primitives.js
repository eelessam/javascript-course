var x = 1;

// both x and y ref the same value (immutable object) 1
var y = x;

// JS creates a new value, 2, and updates x's ref to point to it
x += 1;

// y still refs the value 1
console.log('x is ' + x); // 2
console.log('y is ' + y); // 1

// what about passing primitives to functions?

function increment(num) {
    // the parameter num is updated to ref the number 2
    num += 1;
}

var n1 = 1;

// pass n1 to increment
// JS makes a copy of n1 and assigns it to the parameter named num
// it's a copy of the ref, not the value
increment(n1);
console.log(n1); // 1

