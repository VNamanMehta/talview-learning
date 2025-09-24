const rl = require("readline-sync")

const nums=[]
let n = rl.question("Enter the nos to add or press enter")

while (n!=="") {
    n = parseInt(n)
    nums.push(n)
    n =rl.question("enter another or press enter")
}

function reverse(nums) {
    for (let i=0;i<nums.length/2;i++) {
        const temp = nums[i]
        opp = nums.length - 1 - i
        nums[i] = nums[opp]
        nums[opp] = temp
    }
    return nums
}

console.log(reverse(nums))