// Number Printing Script
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let num1 = 1;
while (num1 <= 10) {
    console.log(num1);
    num1++;
}



// Multiplication Table Script
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}



// Pattern Printing Script
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}



// Sum Calculation Script
let sum = 0;
let i = 1;

while (i <= 10) {
    sum += i;
    i++;
}

console.log("Sum of numbers from 1 to 10 is:", sum);



// Factorial Calculation Script
function factorial(n) {
    let result = 1;
    let k = n;

    do {
        result *= k;
        k--;
    } while (k > 0);

    return result;
}

console.log("Factorial of 5 is:", factorial(5));  