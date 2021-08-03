// an array's length is writable

var nums = [1, 2, 3];

nums.length = 5;

console.log(nums); // [1, 2, 3, empty, empty]

nums.length = 1;

console.log(nums); // [1]