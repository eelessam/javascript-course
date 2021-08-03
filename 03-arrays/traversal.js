var names = ['Sam', 'Raluca', 'Kamran', 'Robert', 'Zeynep', 'Dong', 'Corina'];

// traditional
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// for of
for (var name of names) {
    console.log(name);
}

// for in (intended for iterating over an object, not an array)
for (var index in names) {
    console.log(index); // 0, 1, 2, 3, 4, 5, 6
}

// the forEach method; the function arg. will be called once for each element of the names array
names.forEach(function(name) {
    console.log(name);
});