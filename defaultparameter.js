const rl = require("readline-sync")

const g = rl.question("Enter a greeting")
const fg = g == "" ? undefined : g
const n = rl.question("Enter who you want to greet")

function greet(g = "Hello", n) {
    console.log(g, n)
}

greet(fg,n)