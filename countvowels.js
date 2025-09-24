const rl = require("readline-sync");

// let vowelcount = 0;
const s = rl.question("Enter a string");
// const vowels = new Set(["a","e","i","o","u"])
// for (const i of s) {
//     if (vowels.has(i)) {
//         vowelcount++;
//     }
// }
// console.log(vowelcount)
const vowels = ["A","E","I","O","U","a","e","i","o","u"]
vowelcount = s.split("").filter(i => vowels.includes(i)).length
console.log(vowelcount)