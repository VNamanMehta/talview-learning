const stdmarks = new Map()

stdmarks.set("A",1)
stdmarks.set("B",2)
stdmarks.set("C",3)
stdmarks.set("D",4)

console.log(stdmarks.get("A"))
console.log(stdmarks.has("C"))
console.log(stdmarks.has("E"))

stdmarks.forEach((marks, name) => {
    console.log(name, marks)
})


a = [1,3,3,4,4,4,1,3,2,,5,6,7]

b = new Set(a)

console.log(b)
c = [...b]
console.log(c)