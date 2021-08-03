// destructuring enables the assigning of array elements/object props to individual variables

const nums = [1, 2, 3];
const person = {name: 'Dave', age: 25};

// ES5
var n1 = nums[0];
var n2 = nums[1];
var n3 = nums[2];

// ES6
const [num1, num2, num3] = nums;

// ES5
var name = person.name;
var age = person.age;

// ES6
const {name:n, age:a, height:h=1.6} = person;
console.log(n);
console.log(a);
console.log(h);