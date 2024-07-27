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











