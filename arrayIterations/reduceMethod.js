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

// const reducer = (accumulator, item) => {
//     console.log(accumulator, item)
//   let total = item.price * item.inventory;
//   return (accumulator += total);
// };

// let total = books.reduce(reducer, 0);

const reducer = (accumulator, item) => {
  let total = item.price * item.inventory;
  return accumulator + total;
};

let total = books.reduce(reducer, 0);
console.log(total);
