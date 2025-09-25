const rl = require("readline-sync")

const nums=[]
let n = rl.question("Enter the nos to add or press enter")

while (n!=="") {
    n = parseInt(n)
    nums.push(n)
    n =rl.question("enter another or press enter")
}

sq = (nums) => {
    return nums.map(i => {return i**2})
}
console.log(sq(nums))