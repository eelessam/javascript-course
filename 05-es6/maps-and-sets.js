// a Map is a collection of key value pairs
// it differs from an object insofar as the keys can be any type

const widgets = new Map();

widgets.set('wibble', {name: 'wibble', size: 2, colour: 'red'});
widgets.set('dibble', {name: 'dibble', size: 3, colour: 'blue'});
widgets.set('dobble', {name: 'dobble', size: 1, colour: 'yellow'});

console.log(widgets.get('dibble'));

// the default loop behaviour produces values
for (let x of widgets) {
    console.log(x);
}

// a Set is a collection of unique values

const uniqueNumbers = new Set([1, 1, 2, 3, 3, 4, 4, 4, 5]);
console.log(uniqueNumbers);

const uniqueObjects = new Set([{a: 1}, {a: 1}, {a: 1}]);
console.log(uniqueObjects);