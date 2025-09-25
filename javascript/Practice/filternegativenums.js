const rl = require("readline-sync")

const nums=[]
let n = rl.question("Enter the nos to add or press enter")

while (n!=="") {
    n = parseInt(n)
    nums.push(n)
    n =rl.question("enter another or press enter")
}

pos = (n) => n.filter(i => i>=0)


console.log(pos(nums))