// the spread operator (...) is used to unpack an iterable (array)

function register(name, email, username, password) {
    console.log(name);
    console.log(email);
    console.log(username);
    console.log(password);
}

const creds = ['stuart', 'password'];

// ES5
register('Stuart', 'stuartb@stayahead.com', creds[0], creds[1]);

// ES6
register('Stuart', 'stuartb@stayahead.com', ...creds);

// more commonly spread is used to make (shallow) copies
// a shallow copy means that we're copying refs not objects
const nums = [1, 2, 3];
const numsCopy = [...nums];

// verify that changes to the copy don't affect the original
numsCopy[2] = 4;
console.log(nums); // [1, 2, 3]

const objs = [
    {a: 1},
    {b: 2},
    {c: 3}
];
const objsCopy = [...objs];

// verify that changes to the copy do affect the original
objsCopy[2].c = 4;
console.log(objs); // [{a: 1}, {b: 2}, {c: 4}]

// spread can also be used to (shallow) copy objects
const person = {
    name: 'Dave',
    age: 25
};
const personCopy = {...person};

// verify that changes to the copy don't affect the original
personCopy.name = 'David';
console.log(person); // {name: 'Dave', age: 25}

// spread can also be used to extend arrays & objects
const extendedNums = [...nums, 4, 5, 6];
console.log(extendedNums); // [1, 2, 3, 4, 5, 6]

const extendedPerson = {...person, height: 1.7};
console.log(extendedPerson); // {name: 'Dave', age: 25, height: 1.7}