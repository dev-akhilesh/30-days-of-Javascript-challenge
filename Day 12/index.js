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













