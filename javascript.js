// let x;
// console.log(x)
// const y = 3;
// if (true) {
//     const y = 7
//     console.log(y)
// }
// console.log(y)
// const myobj = {key: "value"}
// myobj.key = "othervalue"
// console.log(myobj.key)
// const myarr = ["html","css"];
// myarr.push("javascript");
// console.log(myarr)

// const sales = "toyota"
// function cartype(name) {
//     return name=="honda" ? name: "sorry"
// }

// const car = {mycar: {a: "saab", b: "kia"}, getcar: cartype("hona"), special: sales}

// console.log(car.mycar.a)

// function f() {
//   try {
//     console.log(0);
//     throw "bogus";
//   } catch (e) {
//     console.log(1);
//     // This return statement is suspended
//     // until finally block has completed
//     return true;
//     console.log(2); // not reachable
//   } finally {
//     console.log(3);
//     return false; // overwrites the previous "return"
//     // `f` exits here
//     console.log(4); // not reachable
//   }
//   console.log(5); // not reachable
// }
// console.log(f()); // 0, 1, 3, false


// let i = 0;
// let j = 10;
// checkIandJ: while (i < 4) {
//   console.log(i);
//   i += 1;
//   checkJ: while (j > 4) {
//     console.log(j);
//     j -= 1;
//     if (j % 2 === 0) {
//       continue;
//     }
//     console.log(j, "is odd.");
//   }
//   console.log("i =", i);
//   console.log("j =", j);
// }

// const arr = [3, 5, 7];
// arr.push("hello")

// for (const i in arr) {
//   console.log(i);
// }
// // "0" "1" "2" "foo"

// for (const i of arr) {
//   console.log(i);
// }
// console.log(arr)
// // Logs: 3 5 7

// function map(f, a) {
//   res = new Array(a.length)
//   for(let i=0;i<a.length;i++) {
//     res[i]=f(a[i])
//   }
//   return res
// }
// numbers = [1,2,3,4,5,10]
// const cubes = map(function(x){
//   return x*x*x
// },numbers)
// for (i of cubes) {
//   console.log(i)
// }

// function outside() {
//   const x = 5;
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }

// console.log(outside()(10)); // 20 (instead of 10)