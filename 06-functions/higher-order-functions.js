const forEach = (array, func) => {
    for (let el of array) {
        func(el);
    }
}

forEach([1, 2, 3], n => console.log(n));

const logggerDecorator = func => {
    return () => {
        console.log(`Calling function ${func.name}`)
        func();
        console.log(`Done with function ${func.name}`)
    }
}

const hello = () => console.log('Hello');
const dectoratedHello = logggerDecorator(hello);
dectoratedHello();