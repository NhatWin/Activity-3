let name = "nhat nguyen";

const age = 20;

console.log(name);

// don't do this//
const greeting = "hello my name is " + name + "I am " + age + " years old";
console.log(greeting);

// do this//
const greeting2 =`hello, my name is ${name} and I am ${age} years old`;
console.log(greeting);