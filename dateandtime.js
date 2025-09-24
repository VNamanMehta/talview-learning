function addzero(n) {
    return n<10 ? `0${n}` : n
}

const now = new Date()

console.log(now)
const fullyear = now.getFullYear()
const day = now.getDay()
const date = addzero(now.getDate())
const month = addzero(now.getMonth()+1)
const hours = addzero(now.getHours())
const mins = addzero(now.getMinutes())
const secs = addzero(now.getSeconds())

console.log(fullyear)
console.log(date)
console.log(day)
console.log(month)
console.log(hours)
console.log(mins)

const bday = 18
const bmonth = 4
let nextbday = new Date(fullyear, bmonth, bday)

if (now>nextbday) {
    nextbday.setFullYear(fullyear+1)
}

let milli = nextbday.getTime() - now.getTime()
let m = 1000*60*60*24
let daystogo = Math.ceil(milli/m)
let monthstogo = daystogo/30
console.log(daystogo)
console.log(monthstogo)

function displayclock() {
    let now = new Date()
    let hours = addzero(now.getHours())
    let mins = addzero(now.getMinutes())
    let secs = addzero(now.getSeconds())
    console.log(`${hours}:${mins}:${secs}`)
}

setInterval(displayclock,1000)