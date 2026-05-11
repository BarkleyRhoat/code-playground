// Variables
var neverUse = true; // should avoid using var
const defaultVar = "Use first"; // const value cannot be changed.
let secondaryVar = "Use second"; // you are able to change value/

//--------------------------------------------------------------------------

// Data types
const str = "string"; // String: Sequence of characters wrapped in ""
const num = 1; // Number: Integers
const bool = true; // Boolean: Two values true or false/ 1 or 0
const obj = { type: "Object" }; // Object: Stores data with key-values
const nullValue = null; // NUlL: When we want the variable to intentionally show nothing.
// const undefined = variable that doesn't have a value

// ----------------------------------------------------------

// Conditional Statements

// Function
function importantConcept(value) {
  console.log("JavaScripts backbone are " + value);
}
importantConcept("functions");

function templateString(ts) {
  console.log(`This is called a ${ts}`); // template string example
}
templateString("template string");

// --------------------------------------------------------

// arrow function
const square = (n) => n * n;
console.log(square(10)); // first n is parameter everything after arrow is body.

const isDog = (name) => name === "Hamilton"; // does name ==== name
console.log(isDog("Hamilton")); // true
console.log(isDog("Rex")); // false

// --------------------------------------------------------

// Array
const myArray = ["Jim", "Bob", "Frank", "Barkley", "Keira"]; // array with strings
console.log(myArray);

const numArray = [1, 2, 3, 4, 5]; // array with numbers
numArray(); // This is how we call the variable.

const ppl = ["bark", "kiki", "hamham", "charchar"];
console.log(ppl[2]); // this is how we access elements (argument[element])

// ------------------------------------------------------

// Array iterations (Methods)
// TRANSFORMATION METHODS
//  .map() - Creates new array by transforming each element
const doubled = [1, 2, 3].map((x) => x * 2); // = [2, 4, 6]
//
//  .filter() - Create a new array with elements that pass a test
const evens = [1, 2, 3, 4].filter((x) => x % 2 === 0); // = [2, 4]
//
//  .reduce() - Reduce array to single value using accumulator
const sum = [1, 2, 3].reduce((acc, x) => acc + x, 0); // = 5
//
// SEARCHING & TESTING
//  .find() & .findIndex() - Find first element matching condition or its index
const found = [1, 2, 3].find(x => x > 1); // = 2
const index = [1, 2, 3].findIndex(x => x > 1); // = 1
const user = users.find(u => u.id === 123);
const userIndex = users.findIndex(u => u.id === 123)
//
//  .some() & .every() - Test if any/all elements pass a condition
const hasEven = [1, 2, 3].some(x => x % 2 === 0); // = true
const allPositive = [1, 2, 3].every(x => x > 0); // = true
const isEmpty = array.legnth === 0 || array.every(x => !x);
//
//  .includes() & .indexOf() - Check if array contains a value or find its position
[1, 2, 3].includes(2); // = true
['a', 'b'].includes('c') // = false
[1, 2, 3].indexOf(2) // = 1
['a', 'b'].indexOf('c') // = -1
arr.inclues(value, fromIndex); 
arr.indexOf(value, fromIndex);
//
// ARRAY MANIPULATION
// .push() & .pop() - Methods to add and remove array elements
// adds/remove from end
arr.push(4, 5); // = returns new length
arr.pop(); // = returns removed element
// adds/removes from start
arr.upshift(0) // returns new length
arr.shift() // returns removed element
// add/remove anywhere
arr.splice(1, 2, 'a', 'b') // At index 1, remove 2, add 'a', 'b'
//
//  .slice() % .concat() - Extract portions and combine arrays without mutation
// Copy portion of array
const portion = arr.slice(1, 3); // Items at index 1, 2
const last3 = arr.slice(-3);     // Last 3 items
const copy = arr.slice();        // Full copy
// Combine arrays
const combined = arr1.concat(arr2, arr3);
const combined = [...arr1, ...arr2]; // Modern way
//
// .sort() & .reverse() - Sort and reverse array elements in place
// Sort (mutates array!)
arr.sort(); // Alphabetical
arr.sort((a, b) => a - b); // Numeric ascending
arr.sort((a, b) => b - a); // Numeric descending
// Reverse (mutates array!)
arr.reverse();
// Non-mutating versions
const sorted = [...arr].sort();
const reversed = [...arr].reverse();
//
// ITERATION METHODS
//forEach() - side effects - Execute function for each element (side effects only)
// Execute function for each element (no return)
[1, 2, 3].forEach(x => console.log(x));
// With index and array
arr.forEach((val, index, array) => {
  console.log(`${index}: ${val}`);
});
// Can't break early (use for...of instead)
// .join() & Array/String Conversion
// Array to string
[1, 2, 3].join();      // '1,2,3'
[1, 2, 3].join(' - '); // '1 - 2 - 3'
[1, 2, 3].join('');    // '123'

// String to array
'1,2,3'.split(',');    // ['1', '2', '3']
'hello'.split('');     // ['h', 'e', 'l', 'l', 'o']
Array.from('hello');   // ['h', 'e', 'l', 'l', 'o']
//
// .flat() & .flatMap() - Flatten nested arrays and map-then-flatten
// Flatten nested arrays
[1, [2, 3]].flat();        // [1, 2, 3]
[1, [2, [3]]].flat(2);     // [1, 2, 3] (depth 2)

// Map and flatten
[1, 2].flatMap(x => [x, x * 2]); // [1, 2, 2, 4]

// Remove empty slots
[1, , 3].flat(); // [1, 3]
//
// ARRAY CREATION & CONVERSION
// .fill() & copyWithin() - Fill array with values or copy elements within
// Fill array with value
[1, 2, 3].fill(0);        // [0, 0, 0]
[1, 2, 3].fill(0, 1);     // [1, 0, 0]
[1, 2, 3].fill(0, 1, 2);  // [1, 0, 3]

// Copy within array
[1, 2, 3, 4, 5].copyWithin(0, 3); // [4, 5, 3, 4, 5]





// -------------------------------------------------------------------------------












// String Methods

// Looping

const looping = ["i", "can", "loop", "!"];

function loopThis(strArray) {
  for (let i = 0; i < strArray.length; i++) {
    console.log(strArray[i]);
  }
  return strArray;
}
// Operators
