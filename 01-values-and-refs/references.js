var x = {a: 1};
var y = x;

// x and y ref the same MUTABLE object
// changes to x will affect y
x.a += 1;

console.log(y); // {a: 2}

function increment(obj) {
    obj.a += 1;
}

var obj = {a: 1};

// we're passing a copy of a ref to a mutable object
// if the function changes the ref'd object those changes will affect the global variable, obj
increment(obj);
console.log(obj); // {a: 2}