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

function loopAndUpdate(array, updaterFoo) {
  const updatedArray = [];
  for (let item of array) {
    updatedArray.push(updaterFoo(item));
  }
  return updatedArray;
}
//return an array of titles
function titles(item) {
  return item.title;
}
//return an array of prices
function prices(item) {
  return item.price;
}
// return an array of inventory
function inventory(item) {
  return item.inventory;
}

//return an array of books,  50% off

function halfOff(item) {
  let itemCopy = Object.assign({}, item);
  itemCopy.price = Math.floor(itemCopy.price / 2);
  return itemCopy;
}
console.log(loopAndUpdate(books, titles));
console.log(loopAndUpdate(books, prices));
console.log(loopAndUpdate(books, inventory));
console.log(loopAndUpdate(books, halfOff));