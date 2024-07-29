// Task 1: Factorial of a Number
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(7)); // Output: 5040



// Task 2: Fibonacci Number
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(7)); // Output: 13
console.log(fibonacci(10)); // Output: 55



// Task 3: Sum of All Elements in an Array
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([10, 20, 30])); // Output: 60
console.log(sumArray([])); // Output: 0



// Task 4: Maximum Element in an Array
function maxElement(arr) {
    if (arr.length === 1) return arr[0];
    return Math.max(arr[0], maxElement(arr.slice(1)));
}
console.log(maxElement([1, 2, 3, 4, 5])); // Output: 5
console.log(maxElement([10, 20, 30, 5, 15])); // Output: 30
console.log(maxElement([-1, -5, -3, -4])); // Output: -1



// Task 5: Reverse a String










