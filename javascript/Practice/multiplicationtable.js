const rl = require("readline-sync")
const num = parseInt(rl.question("Enter the number whose multiplication table is to be calculated"))
let i = 1;
while(i<11) {
    console.log(`${num} x ${i} = ${num*i}\n`)
    i++;
}