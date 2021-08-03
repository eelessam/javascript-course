// JS does NOT support assoc. arrays but it looks like it does

var nums = [1, 2, 3];

// we are adding a prop to the array object; this will NOT appear as an element
nums['name'] = 'My numbers array';
console.log(nums.length); // 3
console.log(nums.name); // My numbers array

// the square bracket notation is an alt. means of accessing object props
// NB: an array is an object
var me = {};
me.name = 'Stuart';
me['age'] = 43;
me['full' + 'name'] = 'Stuart Bailey';
console.log(me); // {name: 'Stuart', age: 43, fullname: 'Stuart Bailey'}