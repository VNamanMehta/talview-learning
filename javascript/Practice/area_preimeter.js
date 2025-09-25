const rl = require("readline-sync")

var shape = rl.question("Enter '1': Rectangle\n'2':Triangle\n'3':Square\n");
if(shape== '1' ) {
    let w = parseFloat(rl.question("Enter the width"))
    let b = parseFloat(rl.question("Enter the breadth"))
    const area = (w,b) => {return w*b}
    const perimeter = (w,b) => {return 2*(w+b)}
    console.log(`Area : ${area(w,b)} \n Perimeter: ${perimeter(w,b)}`)
} else if (shape == '2') {
    let h = parseFloat(rl.question("Enter the height"))
    let b = parseFloat(rl.question("Enter the base"))
    let x = parseFloat(rl.question("Enter the first side"))
    let y = parseFloat(rl.question("Enter the second side"))
    let z = parseFloat(rl.question("Enter the third side"))
    const area = (h,b) => {return (1/2)*b*h}
    const perimeter = (x,y,z) => {return x+y+z}    
    console.log(`Area : ${area(h,b)} \n Perimeter: ${perimeter(x,y,z)}`)
} else {
    let s = parseFloat(rl.question("Enter the side"))
    const area = (s) => {return s*s}
    const perimeter = (s) => {return 4*s}
    console.log(`Area : ${area(s)} \n Perimeter: ${perimeter(s)}`)
}
