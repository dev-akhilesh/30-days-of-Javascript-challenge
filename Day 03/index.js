// Activity 1: If - Else Statements
function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

checkNumber(10);
checkNumber(-5);
checkNumber(0);


function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("The person is eligible to vote.");
    } else {
        console.log("The person is not eligible to vote.");
    }
}

checkVotingEligibility(20);
checkVotingEligibility(16);



// Activity 2: Nested If - Else Statements

function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a + " is the largest number.");
    } else if (b >= a && b >= c) {
        console.log(b + " is the largest number.");
    } else {
        console.log(c + " is the largest number.");
    }
}
findLargest(10, 20, 15);
findLargest(25, 10, 15);
findLargest(10, 10, 10);




// Activity 3: Switch Case

function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day number. Please enter a number between 1 and 7.");
    }
}
getDayOfWeek(1);
getDayOfWeek(5);
getDayOfWeek(8);


function assignGrade(score) {
    switch (true) {
        case (score >= 90):
            console.log("Grade: A");
            break;
        case (score >= 80):
            console.log("Grade: B");
            break;
        case (score >= 70):
            console.log("Grade: C");
            break;
        case (score >= 60):
            console.log("Grade: D");
            break;
        default:
            console.log("Grade: F");
    }
}
assignGrade(95);  // Output: Grade: A
assignGrade(85);  // Output: Grade: B
assignGrade(50);  // Output: Grade: F



// Activity 4: Conditional(Ternary) Operator

function checkEvenOdd(num) {
    const result = (num % 2 === 0) ? "The number is even." : "The number is odd.";
    console.log(result);
}
checkEvenOdd(10);
checkEvenOdd(7); 



// Activity 5: Combining Conditions
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}
isLeapYear(2020); 
isLeapYear(1900);  
isLeapYear(2000); 
