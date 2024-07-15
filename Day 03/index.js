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
