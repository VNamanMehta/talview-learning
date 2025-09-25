const rl = require("readline-sync")

var celsius = parseFloat(rl.question("Enter the temperature in celsius"))
const farheneit = (c) => {return ((9/5)*c)+32}
console.log(farheneit(celsius))