// Activity 1: For Loop
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`)
}



// Activity 2: While Loop
let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log("Sum of numbers from 1 to 10 is:", sum);


let num = 10;
while (num >= 1) {
    console.log(num);
    num--;
}



// Activity 3: Do...While Loop
let j = 1;
do {
    console.log(j);
    j++
} while (j <= 5);

//  Calculate the factorial of a number
function factorial(n) {
    let result = 1;
    let k = n;
    do {
        result *= k;
        k--;
    } while (k > 0);
    return result
};
console.log("Factorial of 5 is:", factorial(10));



// Activity 4: Nested Loops
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* "
    }
    console.log(pattern);
}



// Activity 5: Loop Control Statements
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}
