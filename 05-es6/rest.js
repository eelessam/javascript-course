// the rest operator is used to pack n elements into an array
// the average function may be passed 0, 1, or more numbers
// the rest parameter must be the last one in the parameter list
function average(...nums) {
    console.log(nums);
}

average();
average(1);
average(1, 2, 3);