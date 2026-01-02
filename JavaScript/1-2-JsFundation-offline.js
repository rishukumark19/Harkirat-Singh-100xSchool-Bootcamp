//Strings
//-----------------------------
// Length
function getLength(str) {
  console.log("Original String:", str); //function
  console.log("Length:", str.length); //gives length of string
}
getLength("Hello World");

//indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target)); //return the index of the "target"
}
findIndexOf("Hello World", "World");

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World"); //index of last world

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5); //0 to 4

//use it in one line :
let value = "Hello World World";
console.log(value.slice(0, 5));

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

//code
const str = "hello world";
console.log(str.replace("world", "javascript"));

//split
let value_name = "hi my name is ios";
let words = value_name.split(" "); //delimeter(to split on )

console.log(words);

//toUpperCase & toLowerCase
val1 = "me";
console.log(val1.toUpperCase);
//-------------------------------------
//          Number
//-------------------------------------
function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// parseInt  change from string to an intiger .
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

//-----------------------------------------
//        Array
//-----------------------------------------
// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// push()
const initialArray = [1, 2, 3];
initialArray.push(2);

console.log(initialArray);

// pop()

initialArray.pop(); //takesout from end
console.log(initialArray);

//shift()
initialArray.shift(); //pulls out from front
console.log(initialArray);

//unshift()
initialArray.unshift(0); //put smth in front of array
console.log(initialArray);

//concat():
const secondArray = [4, 5, 6];
console.log(initialArray.concat(secondArray));

// forEach()
// for (let i = 0; i < initialArray.length; i++) {
//   console.log(initialArray[i]);
// }

function logThing(str) {
  console.log(str);
}
initialArray.forEach(logThing); //its expects fucntion as an argument(callbacks) . and prints

//upcoming topics:
//callbacks, map, filter, find, sort
//----------------------------------------------------------------

//classes

class Animal {
  construct(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
}
let dog = new Animal("dog", 4, "bhow"); //create object
let cat = new Animal("cat", 4, "meow");
// cat.speaks(); //calling function

//Dates class
const currentDate = new Date();
console.log(currentDate.getDate());
console.log(currentDate.getFullYear());

