// spread operators with array
let arr = [1, 2, 3]
let arr2 = [...arr, 4]
console.log(arr2)


// spread operator with objects
// let obj = {
//     name: "Barkley"
// }
// let meObj2 = obj
// meObj2.age = 31
// console.log(meObj2)

let dogObj = {
    name: "Hamilton"
}

let dogObj2 = { ...dogObj, age: 9 }
console.log(dogObj)
console.log(dogObj2)


// object destructuring

let { name, age } = dogObj2
console.log(name)
console.log(age)

let [color1, color2, color3] = ['red', 'yellow', 'green']
console.log(color1)