const setclock = document.getElementById('clock')
const setdate = document.getElementById('date')
const setwatch = document.getElementById('watch')
const startbtn = document.getElementById('start')
const resetbtn = document.getElementById('reset')
const stopbtn = document.getElementById('stop')

const formatunit = (unit) => {
    return unit<10 ? `0${unit}` : unit
}

const showclock = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = formatunit(now.getMonth())
    const date = formatunit(now.getDate())
    const mins = formatunit(now.getMinutes())
    const milli = formatunit(now.getSeconds())
    const hours = formatunit(now.getHours())
    setdate.textContent = `${date}-${month}-${year}`
    setclock.textContent = `${hours}:${mins}:${milli}`
}

let interval = null
let start = 0
let passed = 0

const showwatch = () => {
    if (interval) return;
    start = Date.now() - passed

    interval = setInterval(() => {
        const now = Date.now()
        passed = now - start

        const minutes = Math.floor(passed / (1000 * 60));
        const seconds = Math.floor((passed % (1000 * 60)) / 1000);
        const centiseconds = Math.floor((passed % 1000) / 10);

        setwatch.textContent = `${formatunit(minutes)}:${formatunit(seconds)}:${formatunit(centiseconds)}`
    },10)
}


const stopwatch = () => {
    clearInterval(interval)
    interval = null
}

const resetwatch = () => {
    stopwatch()
    passed = 0
    setwatch.textContent = '00:00:00'
}

setInterval(showclock,1000)
showclock()
startbtn.addEventListener('click',showwatch)
stopbtn.addEventListener('click', stopwatch)
resetbtn.addEventListener('click', resetwatch)