// Activity 1: Template Literals
let name = "Akhilesh";
let age = 24;
let introduction = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(introduction);


let multiLineString = `This is a multi-line string.
It spans across multiple lines.
Using template literals makes it easy.`;
console.log(multiLineString);



// Activity 2: Destructuring
let numbers = [10, 20, 30, 40, 50];
let [first, second] = numbers;
console.log(first, second);

let book = { title: "1984", author: "George Orwell", year: 1949 };
let { title, author } = book;
console.log(title, author);



// Activity 3: Spread and Rest Operators
// Spread
let originalArray = [1, 2, 3];
let newArray = [...originalArray, 4, 5, 6];
console.log(newArray);

// Rest
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));  // Output: 15



// Activity 4: Default Parameters
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 2)); // Output: 10
console.log(multiply(5));    // Output: 5



// Activity 5: Enhanced Object Literals
let name1 = "Akhilesh";
let age1 = 24;

let person = {
    name1,
    age1,
    greet() {
        console.log(`Hello, my name is ${this.name1} and I am ${this.age1} years old.`);
    }
};
console.log(person);
person.greet();



let propName = "score";
let propValue = 100;

let computedObject = {
    [propName]: propValue
};

console.log(computedObject);




