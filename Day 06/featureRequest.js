// 1. Array Manipulation Script

const array = [1, 2, 3, 4, 5];

array.push(6);
console.log(array); // Output: [1, 2, 3, 4, 5, 6]

array.pop();
console.log(array); // Output: [1, 2, 3, 4, 5]

array.shift();
console.log(array); // Output: [2, 3, 4, 5]

array.unshift(1);
console.log(array); // Output: [1, 2, 3, 4, 5]




// 2. Array Transformation Script
const originalArray = [1, 2, 3, 4, 5];

const mappedArray = originalArray.map(number => number * 2);
console.log(mappedArray); // Output: [2, 4, 6, 8, 10]

const filteredArray = originalArray.filter(number => number % 2 === 0);
console.log(filteredArray); // Output: [2, 4]

const reducedValue = originalArray.reduce((acc, num) => acc + num, 0);
console.log(reducedValue); // Output: 15



// 3. Array Iteration Script

const iterateArray = [1, 2, 3, 4, 5];

for (let i = 0; i < iterateArray.length; i++) {
    console.log(iterateArray[i]);
}

iterateArray.forEach(number => {
    console.log(number);
});



// 4. Two - dimensional Array Script
const twoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(twoDArray);

const element = twoDArray[1][1]; 
console.log(element); // Output: 5


