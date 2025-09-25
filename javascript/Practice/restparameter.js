const rl = require("readline-sync")

const nums=[]
let n = rl.question("Enter the nos to add or press enter")

while (n!=="") {
    n = parseInt(n)
    nums.push(n)
    n =rl.question("enter another or press enter")
}

function sum(...nums) {
    const total = nums.reduce((acc, cur) => {
        return acc+cur
    }, 0)
    return total
}

console.log(sum(...nums))