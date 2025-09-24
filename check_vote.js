const rl = require("readline-sync");

const age = parseFloat(rl.question("Enter your age to check elegibility to vote"));

if (isNaN(age) || !Number.isInteger(age) || age <= 0) {
    console.log("Enter an integer number greater than 0");
} else {
    const voteMessage = age >= 18 ? "Voting Allowed" : "Voting Not Allowed";
    console.log(voteMessage);
}