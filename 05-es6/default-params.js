// ES5
function es5Register(username, password) {
    console.log(username);
    console.log(password);
}
es5Register();

// ES6
function es6Register(username='guest', password=null) {
    console.log(username);
    console.log(password);
}
es6Register();