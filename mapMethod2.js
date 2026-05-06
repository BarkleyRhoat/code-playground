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

// Return an array of title
// loop through array
// for every item in the array update/change/transform that item without mutating the original array
// make a new array to hold the updated/changed/transformed items

//return an array of titles
const title = books.map((item) => item.title);

//return an array of prices
function pricesFoo(item) {
  console.log("inside of pricesFoo", item);
  return item.price;
}
const prices = books.map(pricesFoo);
// return an array of inventory

const inventory = books.map((item) => item.inventory);
console.log("yo check me out", inventory);

//return an array of books,  50% off

function halfOffFoo(item) {
  let itemCopy = Object.assign({}, item);
  itemCopy.price = Math.floor(itemCopy.price / 2);
  return itemCopy;
}

const halfOff = books.map(halfOffFoo);

console.log(halfOff);
