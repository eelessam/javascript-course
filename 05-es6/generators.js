// a generator is an iterator; that is the compiler converts the generator into an iterator
function* mySimpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// this is effectively the internal workings of a for loop
// that is the for loop will extract the iterator and call next until there are no more values
const iterator = mySimpleGenerator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (let n of mySimpleGenerator()) {
    console.log(n);
}

// a more serious example
function* reverse(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        yield array[i];
    }
}

for (let n of reverse([1, 2, 3])) {
    console.log(n);
}

// can you build a generator that will produce odd numbers up to some arbitrary max?
function* oddNumbers(max) {
    let num = 1;
    while (num <= max) {
        yield num;
        num += 2;
    }
}

for (let n of oddNumbers(10)) {
    console.log(n);
}