// * Destructuring Assignment

let a, b;
[a, b] = [100, 200];
// * Rest patern
// [a, b, ...rest] = [100, 200, 300, 400, 500];
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

({
    a,
    b
} = {
    a: 100,
    b: 200,
    c: 300,
    d: 400,
    e: 500
});


({
    a,
    b,
    ...rest
} = {
    a: 100,
    b: 200,
    c: 300,
    d: 400,
    e: 500
});

// * Array Destructuring

// * Creating variable
// const people = ['John', 'Beth', 'Mike'];


// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// * Parse array returned from function

// function getPeople() {
//     return ['John', 'Beth', 'Mike'];

// }

// let person1, person2, person3;

// [person1, person2, person3] = getPeople();


// console.log(person1, person2, person3);
// console.log(getPeople());

// * Object Destructuring

const person = {
    name: 'John Doe',
    age: 32,
    city: 'Miami',
    gender: 'Male',
    sayHello: function () {
        console.log('Hello');

    }
}

// * ES6 Way
const {
    name,
    age,
    city,
    sayHello
} = person;

console.log(name, age, city);

sayHello();