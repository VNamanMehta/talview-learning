const fruit = "strawberry"
const liquid = "water"
const holder = "cone"
const toppings = "sprinkles"

let isopen = true

let order = (time,work) => {
    return new Promise((res, rej) => {
            if (isopen) {
            setTimeout(()=> {
                res(work())
            },time)
        } else {
            rej(console.log("Shop is closed"))
        }
    })
}

order(2000,() => console.log(`${fruit} icecream was selected`))
.then(()=> {
    return order(0, () => console.log("Production has started"))
})
.then(() => {
    return order(2000,()=> console.log(`${fruit} was chopped`))
})
.then(() => {
    return order(1000, () => console.log(`${liquid} was added`))
})
.then(() => {
    return order(1000, () => console.log(`${holder} was chosen`))
})
.then(() => {
    return order(1500, () => console.log("Machine was started"))
})
.then(()=> {
    return order(1000, () => console.log(`${toppings} were added`))
})
.then(() => {
    return (order(2000,() => console.log("Icecream was served")))
})
.catch(() =>{
    console.log("Oops! The icecream fell. No icecream for you")
})
.finally(() => {
    console.log("Day ended")
})