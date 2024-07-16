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

for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}
