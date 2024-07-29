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
function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.substring(1)) + str[0];
}
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("")); // Output: ""



// Task 6: Check if a String is a Palindrome
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.substring(1, str.length - 1));
}
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("a")); // Output: true



// Task 7: Binary Search on a Sorted Array
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
    return binarySearch(arr, target, mid + 1, end);
}
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // Output: -1
console.log(binarySearch([1, 2, 3, 4, 5], 1)); // Output: 0



// Task 8: Count Occurrences of a Target Element in an Array
function countOccurrences(arr, target) {
    if (arr.length === 0) return 0;
    let count = arr[0] === target ? 1 : 0;
    return count + countOccurrences(arr.slice(1), target);
}
console.log(countOccurrences([1, 2, 3, 4, 5, 3, 3], 3)); // Output: 3
console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // Output: 0
console.log(countOccurrences([1, 1, 1, 1], 1)); // Output: 4



// Task 9: In - Order Traversal of a Binary Tree

// Task 10: Calculate the Depth of a Binary Tree









