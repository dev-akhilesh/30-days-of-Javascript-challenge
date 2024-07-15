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
assignGrade(95);  
assignGrade(85);  
assignGrade(50); 



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
