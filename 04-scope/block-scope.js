var nums = [1, 2, 3];

// n1 will escape into the surrounding scope because var varialbes are NOT block scoped
for (var n1 of nums) {
    console.log(n1);
}

console.log(n1); // 3

// n2 will NOT escape because let variables are block scoped
for (let n2 of nums) {
    console.log(n2);
}

console.log(n2); // ReferenceError