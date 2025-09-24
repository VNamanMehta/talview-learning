const rl = require("readline-sync")

const num = parseInt(rl.question("Enter a number to check if it is prime or not\n"));

function isPrime(n) {
    if (n<=1) return false;
    if (n===2) return true;
    if (n%2==0) return false;
    for(let i=3;i<=Math.sqrt(n);i+=2) {
        if (n%i==0) {
            return false
        }
    }
    return true
}

p = isPrime(num) ? "Prime": "Not Prime";
console.log(p)