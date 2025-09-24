const rl = require("readline-sync")

var l = parseInt(rl.question("Enter the length of the array"))
var a = new Array(l)
for (i=0;i<l;i++) {
    let ele = parseInt(rl.question(`Enter the ${i+1} element of the array`));
    a[i] = ele
}

// function getEven(a) {
//     return a.filter(num => num%2===0)
// }

// console.log(getEven(a))

// function getEven(a) {
//     const evenArr = []
//     for (let i=0;i<l;i++) {
//         const even = a[i]
//         if (even%2===0){
//             evenArr.push(even)
//         }
//     }
//     return evenArr
// }

// console.log(getEven(a))

const getEven = (a) => {
    const evenArr = []
    for (let i=0;i<l;i++) {
        let even = a[i]
        if (even%2===0) {
            evenArr.push(even)
        }
    }
    return evenArr
}

console.log(getEven(a))