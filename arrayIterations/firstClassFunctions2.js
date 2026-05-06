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

function printReport(foo) {
  console.log(foo(books));
  // totalInventory was pass books totalInventory(books)
}

function totalInventory(array) {
  let total = 0;
  for (let item of array) {
    total += item.inventory;
  }
  return `Total Inventory: ${total} items`;
  // without return console would return nothing
}

function replenish(array) {
  let replenishList = [];
  for (item of array) {
    if (item.inventory < 3) {
      replenishList.push(item.title);
    }
  }
  return `Place Order for: ${replenishList.join(",")}`;
}

printReport(totalInventory);
printReport(replenish);
