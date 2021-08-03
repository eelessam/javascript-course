function getClosure() {
    let name = 'Stuart';
    return function() {
        // name is lexically scoped
        // it declared in the outer scope and captured in the inner scope
        console.log(name);
    }
}

let closure = getClosure();
closure(); // Stuart

function getUniqueNumberGenerator() {
    let number = 1;
    return function() {
        return number++;
    }
}

let getUniqueNumber = getUniqueNumberGenerator();
console.log(getUniqueNumber()); // 1
console.log(getUniqueNumber()); // 2
console.log(getUniqueNumber()); // 3