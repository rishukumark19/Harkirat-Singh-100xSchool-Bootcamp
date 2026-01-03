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
const date = new Date();
console.log("current date is", date.getDate());
console.log("current month is", date.getMonth() + 1); //month is 0 based
console.log("current year is", date.getFullYear());

console.log("current hours is", date.getHours());
console.log("current minutes is", date.getMinutes());
console.log("current seconds is", date.getSeconds());

//Important: time in milliseconds since jan 1 1970
const currentDate = new Date();
console.log("current time in ms since jan 1 1970:", currentDate.getTime());
//epoch timestamp

function calculateSum() {
  let a = 0;
  for (let i = 0; i < 100000; i++) {
    a = a + 1;
  }
  return a;
}
const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

calculateSum();
const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();
console.log("time taken in ms:", afterTimeInMs - beforeTimeInMs);

//JSON: JavaScript Object Notation
const user = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log(user);
console.log(user["name"]);

//JSON.parse
//JSON.stringify
const userJSON = JSON.stringify(user); //convert to JSON string
console.log("JSON String:", userJSON);

const userObj = JSON.parse(userJSON); //convert back to object
console.log("Parsed Object:", userObj);

//Math
console.log(Math.random()); //random number between 0 and 1
console.log(Math.floor(Math.random() * 10)); //random number between 0 and 9
console.log(Math.ceil(4.3)); //5 //rounds up
console.log(Math.floor(4.7)); //4 //rounds down
console.log(Math.round(4.5)); //5 //rounds to nearest integer
console.log(Math.sqrt(16)); //4 //square root
console.log(Math.pow(2, 3)); //8 //2 to the power of 3
console.log(Math.min(1, 2, 3, -4, 5)); //-4 //minimum value
console.log(Math.max(1, 2, 3, -4, 5)); //5 //maximum value
console.log(Math.abs(-10)); //10 //absolute value
console.log(Math.sin(Math.PI / 2)); //1 //sine of 90 degrees
console.log(Math.cos(0)); //1 //cosine of 0 degrees
console.log(Math.tan(Math.PI / 4)); //1 //tangent of 45 degrees
console.log(Math.log(1)); //0 //natural logarithm
console.log(Math.exp(1)); //2.718281828459045 //e to the power of 1
console.log(Math.log10(100)); //2 //base 10 logarithm
console.log(Math.log2(8)); //3 //base 2 logarithm
console.log(Math.cbrt(27)); //3 //cube root
console.log(Math.trunc(4.9)); //4 //removes decimal part
console.log(Math.fround(1.5)); //1.5 //rounds to nearest 32-bit float
console.log(Math.hypot(3, 4)); //5 //hypotenuse of a right triangle
console.log(Math.clz32(1)); //31 //count leading zeros in 32-bit integer
console.log(Math.imul(2, 4)); //8 //32-bit integer multiplication
console.log(Math.sign(-5)); //-1 //sign of a number

//Objects
const sampleObject = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};
console.log("Object:", sampleObject);
//keys
const keys = Object.keys(sampleObject);
console.log("Keys:", keys);
//values
const values = Object.values(sampleObject);
console.log("Values:", values);
//entries
const entries = Object.entries(sampleObject);
console.log("Entries:", entries);
//hasOwnProperty
console.log("Has name property:", sampleObject.hasOwnProperty("name"));
console.log("Has country property:", sampleObject.hasOwnProperty("country"));
//delete property
delete sampleObject.city;
console.log("After deleting city:", sampleObject);
//assign
const additionalInfo = { country: "Fantasy", occupation: "Adventurer" };
const updatedObject = Object.assign({}, sampleObject, additionalInfo);
console.log("After assign:", updatedObject);
//freeze
Object.freeze(updatedObject);
updatedObject.age = 30; //will not change
console.log("After freeze attempt to change age:", updatedObject);
//seal
Object.seal(updatedObject);
delete updatedObject.name; //will not delete
console.log("After seal attempt to delete name:", updatedObject);
//getOwnPropertyNames
const propNames = Object.getOwnPropertyNames(updatedObject);
console.log("Property Names:", propNames);