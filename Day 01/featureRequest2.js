// Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let changeable = "I can change";
console.log("Before reassignment:", changeable); // Output: I can change

changeable = "I've changed!";
console.log("After reassignment:", changeable); // Output: I've changed!

const unchangeable = "I cannot change";
console.log("Before reassignment:", unchangeable); // Output: I cannot change

// Trying to reassign the const variable will throw an error
unchangeable = "Attempting to change"; // TypeError: Assignment to constant variable.
