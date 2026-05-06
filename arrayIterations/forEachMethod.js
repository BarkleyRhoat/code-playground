let books = [
  {
    title: "Moby Dick",
    price: 20.0,
    inventory: 10,
  },
  {
    title: "Hells Angels",
    price: 22.0,
    inventory: 45,
  },
  {
    title: "Cat in the Hat",
    price: 23.0,
    inventory: 100,
  },
  {
    title: "Dune",
    price: 50.0,
    inventory: 1,
  },
];


// function loopThrough(inventory, foo) {
//     for (let item of inventory) {
//         foo(item)
//     }
// }

// books.forEach(function (item) {
//     console.log(item.title.toUpperCase())
// })

books.forEach(item => console.log(item.title.toLowerCase()))

// function logTitle(item) {
//     console.log(item.title.toUpperCase())
// }

