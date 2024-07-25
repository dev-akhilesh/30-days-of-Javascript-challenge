// Task 1
import add from './add.js';
console.log(`Add: ${add(3, 4)}`);

// Task 2
import person from './person.js';
person.greet();
console.log(`Name: ${person.name}, Age: ${person.age}`);

// Task 3
import { add as addFunc, subtract } from './mathFunctions.js';
console.log(`Add: ${addFunc(5, 3)}`);
console.log(`Subtract: ${subtract(5, 3)}`);

// Task 4
import multiply from './multiply.js';
console.log(`Multiply: ${multiply(5, 3)}`);

// Task 5
import * as constants from './constants.js';
console.log(`PI: ${constants.PI}`);
console.log(`Circle Area: ${constants.circleArea(5)}`);
console.log(`Exponential: ${constants.exponential(2, 3)}`);

// Task 6
import _ from 'lodash';
const arr = [1, 2, 3, 4, 5];
const reversedArr = _.reverse([...arr]);
console.log(`Reversed array: ${reversedArr}`);

// Task 7
import axios from 'axios';
axios.get('https://api.github.com/users/github')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
