'use strict';

// octal literals
var octal = 012;
console.log(octal);

// prop name duplication (NB: this did NOT yield an error in strict mode)
var prefs = {
    party: 'Democrats',
    party: 'Republicans'
};
console.log(prefs.party);

// assignment to non-writable prop
var me = {};
Object.defineProperty(me, 'name', {
    writable: false,
    value: 'Stuart'
});
me.name = 'Dave';
console.log(me.name);

// accidental global
x = 1;
console.log(global.x);