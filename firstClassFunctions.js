const loopThroughArray = function (array) {
  for (let item of array) {
    console.log(item);
  }
};

const capitalizeArray = function (array) {
  let newArray = [];
  for (let item of array) {
    newArray.push(item.toUpperCase());
  }
  console.log(newArray);
};

function handleBooks(fun) {
  let books = ["Moby Dick", "cat in the hat", "hells angels", "dune"];
  fun(books);
}
handleBooks(loopThroughArray);
handleBooks(capitalizeArray);
