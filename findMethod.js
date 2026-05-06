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

// Will loop through inventory
// Find the first object whose condition returns true based on a callback

// function loopThroughAndFind(inventory, finder) {
//   let result = null;
//   for (let item of inventory) {
//     if (finder(item) === true) {
//       result = item;
//       break;
//     }
//   }
//   return result;
// }

// let foundItem = books.find(isBook)
// console.log(foundItem)

let foundItem = books.find(function (book) {
    return book.title === "Cat in the Hat"
})
console.log(foundItem)

//will find a given book
function isBook(book) {
  return book.title === "Cat in the Hat";
}
// will find the first book that needs to be restocked
function stockFirst(item) {
    return item.inventory < 3
}