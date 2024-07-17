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
