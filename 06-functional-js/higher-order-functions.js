// a higher order function is one that is passed and/or returns a function
const forEach = (array, func) => {
    for (let el of array) {
        func(el);
    }
}

forEach([1, 2, 3], n => console.log(n));

// a decorator is a function that changes the behaviour of a given function
const loggerDecorator = func => {
    return () => {
        console.log(`Calling function ${func.name}`);
        func();
        console.log(`Done with function ${func.name}`);
    }
}

const hello = () => console.log('Hello');
const decoratedHello = loggerDecorator(hello);
decoratedHello();