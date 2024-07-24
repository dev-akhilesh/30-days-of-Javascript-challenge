// Activity 1: Basic Error Handling with Try - Catch
function throwError() {
    throw new Error("This is an intentional error");
}

try {
    throwError();
} catch (error) {
    console.error("Caught an error:", error.message);
}


function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divideNumbers(10, 2)); // Should print 5
    console.log(divideNumbers(10, 0)); // Should throw an error
} catch (error) {
    console.error("Error:", error.message);
}



// Activity 2: Finally Block
function executeWithFinally() {
    try {
        console.log("In the try block");
        throw new Error("An error occurred");
    } catch (error) {
        console.error("In the catch block:", error.message);
    } finally {
        console.log("In the finally block");
    }
}

executeWithFinally();



// Activity 3: Custom Error Objects
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    throw new CustomError("This is a custom error");
}

try {
    throwCustomError();
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}


class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "Validation Error"
    }
}

function validateInput(input) {
    if (!input) {
        throw new ValidationError("Input cannot be empty");
    }
    console.log(`Validated: ${input}`)
    return true;
}

try {
    validateInput("");
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}



// Activity 4: Error Handling in Promises
const randomPromise = new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
        resolve("Promise resolved");
    }
    else {
        reject("Promise rejected");
    }
    // random > 0.5 ? resolve("Promise resolved") : reject("Promise rejected");
});

randomPromise
    .then(message => console.log(message))
    .catch(error => console.error("Error: ", error))


async function handleRandomPromise() {
    try {
        const message = await randomPromise;
        console.log(message);
    } catch (error) {
        console.error("Async error:", error);
    }
}
handleRandomPromise();



// Activity 5: Graceful Error Handling in Fetch
fetch("https://invalid.url")
    .then(response => response.json())
    .catch(error => console.error("Fetch error:", error.message));


async function fetchData() {
    try {
        const response = await fetch("https://invalid.url");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Async fetch error:", error.message);
    }
}

fetchData();


