const task = new Promise((res) => {
    setTimeout(() => {
        console.log("task done")
        res()
    },2000)
})

async function runTask() {
    console.log("starting")
    await task
    console.log("ending")
}

runTask()


async function fetch_display() {
    const api = ""
    try {
        console.log("Fetching..")
        const response = await fetch(api)
        if (!response.ok) {
            throw new Error(`HTTP ERROR!!: ${response.status}`)
            const dis = await response.json()
            console.log(dis)
        }
    } catch (error) {
        console.error(`Error processing: ${error}`)
    }
}

fetch_display()