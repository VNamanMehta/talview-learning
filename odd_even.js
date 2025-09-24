const rl = require("readline-sync")

input = parseInt(rl.question("Enter any natural number"))
if (input%2==0) {
    console.log("Even")
} else {
    console.log("Odd")
}