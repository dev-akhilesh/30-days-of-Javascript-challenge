// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerFunction() {
    let outerVariable = 'Hello, World!';

    function innerFunction() {
        return outerVariable;
    }

    return innerFunction;
}
const inner = outerFunction();
console.log(inner());  // Output: 'Hello, World!'



// Task 2: Create a closure that maintains a private counter.Implement functions to increment and get the current value of the counter.
function createCounter() {
    let counter = 0;

    return {
        increment: function () {
            counter++;
        },
        getValue: function () {
            return counter;
        }
    };
}
const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());  // Output: 2



// Task 3: Write a function that generates unique IDs.Use a closure to keep track of the last generated ID and increment it with each call.
function createIDGenerator() {
    let lastID = 0;

    return function () {
        lastID++;
        return lastID;
    };
}

const generateID = createIDGenerator();
console.log(generateID());  // Output: 1
console.log(generateID());  // Output: 2
console.log(generateID());  // Output: 3




// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function greet(name) {
    return function () {
        return `Hello ${name}`;
    }
}
const greetJohn = greet('John');
console.log(greetJohn());  // Output: 'Hello, John!'

const greetJane = greet('Jane');
console.log(greetJane());  // Output: 'Hello, Jane!'



// Task 5: Write a loop that creates an array of functions.Each function should log its index when called.Use a closure to ensure each function logs the correct index.
function createFunctionArray() {
    let functions = [];

    for (let i = 0; i < 5; i++) {
        functions.push((function (index) {
            return function () {
                console.log(index);
            };
        })(i));
    }

    return functions;
}

const functionArray = createFunctionArray();
functionArray[0]();  // Output: 0
functionArray[1]();  // Output: 1
functionArray[2]();  // Output: 2
functionArray[3]();  // Output: 3
functionArray[4]();  // Output: 4



// Task 6: Use closures to create a simple module for managing a collection of items.Implement methods to add, remove, and list items.

const itemManager = (function () {
    let items = [];

    return {
        addItem: function (item) {
            items.push(item);
        },
        removeItem: function (item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        listItems: function () {
            return items;
        }
    };
})();

itemManager.addItem('item1');
itemManager.addItem('item2');
itemManager.addItem('item3');
itemManager.addItem('item4');
console.log(itemManager.listItems());  // Output: ['item1', 'item2','item3', 'item4']
itemManager.removeItem('item3');
console.log(itemManager.listItems());  // Output: ['item1','item2', 'item4']



// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
    let cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
}

// Example function to memoize
function slowFunction(num) {
    // Simulate a slow computation
    for (let i = 0; i < 1e6; i++) { }
    return num * 2;
}

const memoizedFunction = memoize(slowFunction);
console.log(memoizedFunction(5));  // Output: 10
console.log(memoizedFunction(5));  // Output: 10 (retrieved from cache)




// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function memoizeFactorial() {
    let cache = {};

    return function factorial(n) {
        if (n in cache) {
            return cache[n];
        }
        if (n === 0) {
            cache[n] = 1;
        } else {
            cache[n] = n * factorial(n - 1);
        }
        return cache[n];
    };
}

const memoizedFactorial = memoizeFactorial();
console.log(memoizedFactorial(5));  // Output: 120
console.log(memoizedFactorial(6));  // Output: 720
console.log(memoizedFactorial(5));  // Output: 120 (retrieved from cache)








