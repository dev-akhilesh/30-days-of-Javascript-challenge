// Activity 1: Array Creation and Access
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const firstElement = numbers[0];
const lastElement = numbers[numbers.length - 1];
console.log(firstElement);
console.log(lastElement);



// Activity 2: Array Methods(Basic)
numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4, 5]

numbers.shift();
console.log(numbers); // Output: [2, 3, 4, 5]

numbers.unshift(8);
console.log(numbers); // Output: [8, 2, 3, 4, 5]



// Activity 3: Array Methods(Intermediate)
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

const evenNumbers = numbers.filter(num => num % 2 == 0);
console.log(evenNumbers);

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum);



// Activity 4: Array Iteration
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach(number => {
    console.log(number);
});



// Activity 5: Multi - dimensional Arrays
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);

const specificElement = matrix[1][1];
console.log(specificElement);