// Activity 1: Function Declaration
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(number + ' is even');
    } else {
        console.log(number + ' is odd');
    }
}
checkEvenOrOdd(4); 
checkEvenOrOdd(7); 



function square(number) {
    return number * number;
}
console.log(square(5)); 
console.log(square(8));



// Activity 2: Function Expression
const findMax = function (a, b) {
    const max = (a > b) ? a : b;
    console.log('Maximum is: ' + max);
}
findMax(10, 20); // Maximum is: 20
findMax(30, 25); // Maximum is: 30


const concatenateStrings = function (str1, str2) {
    return str1 + str2;
}
console.log(concatenateStrings('Hello, ', 'World!')); // Hello, World!
console.log(concatenateStrings('Good ', 'Morning!')); // Good Morning!



// Activity 3: Arrow Functions
const sum = (a, b) => a + b;
console.log(sum(5, 7)); // 12
console.log(sum(10, 15)); // 25


const containsCharacter = (str, char) => str.includes(char);
console.log(containsCharacter('hello', 'e')); // true
console.log(containsCharacter('world', 'a')); // false



// Activity 4: Function Parameters and Default Values
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 4)); // 20
console.log(multiply(7)); // 7 (since b defaults to 1)


function greet(name, age = 'unknown') {
    return `Hello ${name}, you are ${age} years old.`;
}
console.log(greet('John', 25)); // Hello John, you are 25 years old.
console.log(greet('Jane')); // Hello Jane, you are unknown years old.



// Activity 5: Higher - Order Functions
function repeat(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
repeat(() => console.log('Hello!'), 3);
// Output:
// Hello!
// Hello!
// Hello!


function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}
const double = x => x * 2;
const addTen = x => x + 10;

console.log(applyFunctions(double, addTen, 5)); // 20 (double 5 to get 10, then add 10 to get 20)



// Even or Odd Function Script
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(number + ' is even');
    } else {
        console.log(number + ' is odd');
    }
}
checkEvenOrOdd(4); // 4 is even
checkEvenOrOdd(7); // 7 is odd



// Square Calculation Function Script
function square(number) {
    return number * number;
}
console.log(square(5)); // 25
console.log(square(8)); // 64


const sum1 = (a, b) => a + b;
console.log(sum1(5, 7)); // 12
console.log(sum1(10, 15)); // 25



function repeat(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
repeat(() => console.log('Hello!'), 3);
// Output:
// Hello!
// Hello!
// Hello!
