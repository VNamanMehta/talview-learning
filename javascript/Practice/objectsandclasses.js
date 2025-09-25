const rl = require("readline-sync")


const name = rl.question("Enter the name")
const age = rl.question("Enter the age")

// const person = {
//     name: name,
//     age: age,
//     greet: function(){
//         console.log(`${this.name}'s age is ${this.age}.`)
//     }
// }

// person.greet()

// for (const key in person) {
//     console.log(`${key} : ${person[key]}`)
// }

// const keys = Object.keys(person)
// keys.forEach(k => console.log(k))
// console.log(Object.values(person))
// console.log(Object.entries(person))


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`${this.name}'s age is ${this.age}`)
    }
}

per1 = new Person(name,age)
per1.greet()