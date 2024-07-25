const add = require('./add');
const person = require('./person');

// Activity 1: Creating and Exporting Modules
const sum = add(3, 4);
console.log(`The sum is: ${sum}`);


person.greet();
console.log(`Name: ${person.name}, Age: ${person.age}`);
