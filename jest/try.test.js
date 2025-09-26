import sum from "./sum";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test("Object Assignment", () => {
  const data = {one: 1}
  data['two'] = 2
  expect(data).toEqual({one: 1, two: 2})
})

test("adding positive numbers is not 0",() => {
  for(let i=1;i<10;i++) {
    for (let j = 0;j<10;j++) {
      expect(i+j).not.toBe(0)
    }
  }
})

test("null",() => {
  const n = null
  expect(n).toBeNull()
  expect(n).not.toBeUndefined()
  expect(n).toBeFalsy()
  expect(n).toBeDefined()
  expect(n).not.toBeTruthy()
})

test("zero",() => {
  const n = null
  expect(n).toBeNull()
  expect(n).not.toBeUndefined()
  expect(n).toBeFalsy()
  expect(n).toBeDefined()
  expect(n).not.toBeTruthy()
})

test("2 + 2", () => {
  const v = 2+2;
  expect(v).toBeGreaterThan(3)
  expect(v).toBeGreaterThanOrEqual(3.75)
  expect(v).toBeLessThan(5)
  expect(v).toBeLessThanOrEqual(4.25)
})

test("adding floating point numbers",() => {
  const v = 0.1 + 0.2;
  expect(v).toBeCloseTo(0.3)
  }
)

test("there is no I in naman", () => {
  expect('naman').not.toMatch(/I/)
  expect('naman').toMatch(/man/)
})

const names = ['n','a','m','a','n']
test("the characters in names list",() => {
  expect(names).toContain('n')
  expect(new Set(names)).toContain('n')
})

function throwError() {
  throw Error("Error - Error - Error")
}
test("error",() => {
  expect(() => throwError()).toThrow()
  expect(() => throwError()).toThrow(Error)
  expect(() => throwError()).toThrow(/Error/)
  expect(() => throwError()).toThrow("Error - ")
  expect(() => throwError()).toThrow(/^Error - Error - Error$/)
})

test("test out promises with jest",() => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data =>expect(data.title).toMatch('delectus'))
})

test("test out async/await with jest",async() => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const response = await data.json()
  expect(response.title).toMatch("delectus")
})

test('except.assertion with async and jest',async() => {
  expect.assertions(1)
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const response = await data.json()
    expect(response.title).toMatch("delectus")
  } catch (error) {
    expect(error).toMatch("Error")
  }
})