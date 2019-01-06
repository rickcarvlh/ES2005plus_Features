// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

// console.log(sym1);
// console.log(sym2);
// console.log(typeof sym2);

//* No two Symbol can be the same -> NEVER
// console.log(Symbol() === Symbol());

// console.log(`Hello ${String(sym1)}`);

// * Unique Object Keys
const Key1 = Symbol()
const Key2 = Symbol('sym2');

//* object
const myObj = {};

myObj[Key1] = 'Prop1';
myObj[Key2] = 'Prop2';
myObj.Key3 = 'Prop3';
myObj.Key4 = 'Prop4';

// console.log(myObj[Key1]);
// console.log(myObj[Key2]);

// * Symbols are not enumerable in for....in loops
// for (let i in myObj) {
//     console.log(`${i}: ${myObj[i]}`);

// }

// * Symbols are ignored by JSON.stringify
console.log(JSON.stringify({
    key: 'prop'
}));
console.log(JSON.stringify({
    [Symbol('sym1')]: 'prop'
}));