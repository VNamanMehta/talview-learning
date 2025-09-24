const rl = require("readline-sync")

const nums=[]
let n = rl.question("Enter the nos to add or press enter")

while (n!=="") {
    n = parseInt(n)
    nums.push(n)
    n =rl.question("enter another or press enter")
}

function findlargest(n) {
    const largest = n.reduce((acc,cur) => {
        return cur>acc ? cur : acc 
    })
    return largest
}
console.log(findlargest(nums))