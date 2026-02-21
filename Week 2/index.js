// Link:https://petal-estimate-4e9.notion.site/2nd-class-JS-101-2f17dfd107358074a477dc0f71bf9a11?pvs=143

// ==============================
// Class 2 - JS 101 (Index)
// ==============================
//
// 1. Javascript - The basics
//    - Core ideas of JavaScript as a language.
//
// 2. Properties of JS
//    - Key characteristics and features of JavaScript.
//
// 3. Syntax of Javascript
//    - Rules for writing valid JS code (keywords, braces, semicolons, etc.).
//
// 4. Complex types
//    - Non-primitive types like objects, arrays, and functions.
//
// 5. Introduction
//    - High-level overview of what will be covered in this class.
//
// 6. Normal functions in JS
//    - Defining and calling regular functions, parameters, return values.
//
// 7. Synchronous code
//    - Code that runs line-by-line, blocking until each step finishes.
//
// 8. I/O heavy operations
//    - Operations that spend time waiting on input/output (disk, network, etc.).
//
// 9. I/O bound tasks vs CPU bound tasks
//    - Difference between tasks limited by I/O speed vs processor speed.
//
// 10. Doing I/O bound tasks in the real world
//     - Practical examples of I/O heavy work in real applications.
//
// 11. Functional arguments
//     - Passing functions as arguments (higher-order functions).
//
// 12. Asynchronous code, callbacks
//     - Non-blocking code patterns using callbacks.
//
// 13. JS Architecture for async code
//     - How JS handles async under the hood (event loop, callbacks queue, etc.).
//
// ==============================
// End of Class 2 - JS 101 index
// ==============================
// ==============================
// Javascript - The basics
// ==============================
//Simplest JS code :
console.log("Hi this is the beginning of js code ");
// Web development
// ---------------
// Web development involves writing a lot of HTML, CSS and JS code.
// Historically (and even today to some extent), browsers could only
// understand HTML, CSS and JS.
// Any website you see is basically a bunch of HTML, CSS and JS files
// along with some assets (images, videos, etc).
//
// Facts / Callouts
// ----------------
//
// 1) React, Next.js are frameworks.
//    - They help you build apps faster, but in the end they
//      compile/bundle down to plain HTML, CSS, and JS,
//      which is what the browser actually understands.
//
// 2) C++ on LeetCode does NOT run in your browser.
//    - When you run C++ code on LeetCode, it executes on a remote server,
//      not in your local browser/machine.
//    - Your browser cannot (almost never) compile and run C++ directly.
//
// 3) What languages can a browser interpret?
//    - HTML
//    - CSS
//    - JavaScript
//    - WebAssembly (Wasm)
//    - C++/Rust code can run in the browser only after being compiled
//      to WebAssembly.

// ==============================
// End - Javascript - The basics
// ==============================
// ==============================
// Properties of JavaScript
// ==============================
//

// Every language has its own unique features.
// JavaScript has the following core properties:
//
// 1) Interpreted
// ---------------
// - JavaScript is an interpreted language.
// - Code is executed line-by-line at runtime by the JS engine
//   in the browser or server (like Node.js).
// - There is no separate compile step into machine code that you run later.
//
// Upsides:
// - One less step before running your code (write → run directly).
//
// Downsides:
// - Performance overhead compared to low-level compiled languages.
// - More prone to runtime errors (you often discover type/logic issues
//   only when that line of code executes).
//
//
// 2) Dynamically Typed
// --------------------
// - Variables are not bound to a fixed data type.
// - The type is decided at runtime and can change while the program runs.
//
// Example in C++ (this WON'T compile):
// int a = 1;
// a = "hello";  // error
// a = true;     // error
//
// Example in JavaScript (this WILL run):
// var a = 1;
// a = "harkirat";
// a = true;
// console.log(a);  // true
//
// This flexibility makes JS easy to start with, but can cause
// unexpected bugs if you are not careful with types.
//
//
// 3) Single Threaded
// ------------------
// - JavaScript executes in a single thread.
// - It processes one task at a time in a single call stack.
// - Concurrency/asynchronicity is handled via the event loop,
//   but the main JS execution itself is single-threaded.
// - You will go deeper into this in later classes.
//
//
// 4) Garbage Collected
// --------------------
// - JavaScript automatically manages memory.
// - The garbage collector frees memory for objects that are
//   no longer reachable/used in the program.
// - This reduces chances of memory leaks compared to manual
//   memory management languages, but can introduce some GC overhead.
//
//
// 5) Is JS a good language?
// -------------------------
// - Yes and no. It is beginner friendly and great for web development,
//   but it has performance overhead compared to low-level languages.
// - Tools/runtimes like Bun are trying to improve performance,
//   but there is still a gap vs C++/Rust level performance.
//
//NOTES:
// comparison c++ is compled langage , js compiled at runtime(just in time compilation).so c++ is fast nd js is slow in running due to compline.
//JS is dynamically typed: means we can change the type of variable at runtime. else c++ is statically typed.
//memory management : garbage value :if variable is not needed for a long time , it needed to be removed for the time being during execution of program.but it makes it slow .
// ==============================
// End - Properties of JS
// ==============================
// ==============================
// Syntax of Javascript
// ==============================
//
// 1. Variables
// ------------
// Variables are used to store data.
// In JavaScript, you declare variables using var, let, or const.
let name = "John"; // Variable that can be reassigned
const age = 30; // Constant variable that cannot be reassigned
var isStudent = true; // Older way to declare variables, function-scoped
//
// Assignment:
// Create a variable for each of the following: your favorite color,
// your height in centimeters, and whether you like pizza.
// Use appropriate declarations (let, const, or var) and log them
// using console.log.
//
//
// 2. Data types
// -------------
// Basic examples of different data types in JS.
let number = 42; // Number
let string = "Hello World"; // String
let isActive = false; // Boolean
let numbers = [1, 2, 3]; // Array
//
//
// 3. Operators
// ------------
// Arithmetic, comparison, and logical operators.
let sum = 10 + 5; // Arithmetic operator
let isEqual = 10 === 10; // Comparison operator
let isTrue = true && false; // Logical operator
//
//
// 4. Functions
// ------------
// Function declaration and calling a function.
// Function declaration
function greet(name) {
  return "Hello, " + name;
}
// Function call
let message = greet("John"); // "Hello, John"
//
// Assignment #1:
// Write a function sum that finds the sum of two numbers.
// Side quest: Try passing in a string instead of a number
// and observe what happens.
//
// Assignment #2:
// Write a function called canVote that returns true or false
// depending on whether the age of a user is > 18.
//
//
// 5. If/Else
// ----------
// Basic conditional statement example.
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
//
// Assignment:
// Write an if/else statement that checks if a number is even or odd.
// If it's even, print "The number is even."
// Otherwise, print "The number is odd."
//
//
// 6. Loops
// --------
// For loop example.
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs 0 to 4
}
//
// While loop example.
let j = 0;
while (j < 5) {
  console.log(j); // Outputs 0 to 4
  j++;
}
//
// Assignment:
// Write a function called sum that finds the sum from 1 to a number.
//---------------------------------------------------------------------
//NOTES:
//building blocks of code is syntax
//variable are storage of data.
//syntex : var/let/const <variable name> = <value>: let a =1: use let/const only.
//data types: 3 types : number, string, boolean.
//operators: +,-,*,/,%,==,===,!=,!==,&&,||,! (aruthmetic ,comparison,logical)
//function: functions are ued to group together bunch of logic .
console.log("-----function example-----");
function greet(nameOfPerson) {
  console.log("Hello " + nameOfPerson);
}
greet("John");
//conditionals :
//
console.log("--------conditionals example with function--------");
function isLegal(age) {
  if (age >= 18) {
    console.log("you can vote");
  } else {
    console.log("you cannot vote");
  }
}
console.log("66 years of age can vote ?");
isLegal(66);
console.log("2 years of age can vote ?");
isLegal(2);
//loops:
//use to do when we hv to repeat it on fixed number of times.
//
console.log("--------loops example--------");
for (let i = 1; i <= 19; i++) {
  isLegal(i);
  console.log(" as age is " + i);
}
// ==============================
// End - Syntax of Javascript
// ==============================
// ==============================
// Complex types in JavaScript
// ==============================
//
// 1) Objects
// ----------
// - An object is a collection of key-value pairs.
// - Each key is a string, and each value can be any valid JS type (including another object). [page:15]
//
// Example:
let user = {
  name: "Harkirat",
  age: 19,
};

console.log("Harkirat's age is " + user.age);
//
// Assignment #1:
// Write a function that takes a user object as input and greets them
// with their name and age. [page:15]
//
//   Input: { name: "Harkirat", age: 19 }
//   Output (log): "Hi Harkirat, your age is 19"
//
// Assignment #2:
// Write a function that takes a new object as input with
//   { name, age, gender }
// and greets the user with their gender:
//   "Hi Mr/Mrs/Others Harkirat, your age is 21". [page:15]
//
// Assignment #3:
// Extend the above to also tell the user if they are legal to vote or not
// (age >= 18 → can vote, else cannot vote). [page:15]
//
//
// 2) Arrays
// ---------
// - Arrays let you group data together in an ordered list. [page:15]
const users = ["harkirat", "raman", "diljeet"];

const totalUsers = users.length;
const firstUser = users[0];
//
// Assignment:
// Write a function that takes an array of numbers as input,
// and returns a new array with only even values.
// Hint: Read about the `filter` method in JS. [page:15]
//

// 3) Array of Objects
// -------------------
// - We can have arrays whose elements are objects (more structured data). [page:15]
const usersArr = [
  {
    name: "Harkirat",
    age: 21,
  },
  {
    name: "raman",
    age: 22,
  },
];

const user1 = usersArr[0];
const user1Age = usersArr[0].age;
//
// Assignment:
// Write a function that takes an array of users as input
// and returns only the users who are more than 18 years old. [page:15]
//
//
// 4) Object of Objects (Nested Objects)
// -------------------------------------
// - Objects can contain other objects as values (nested structure). [page:15]
const user1Nested = {
  name: "harkirat",
  age: 19,
  address: {
    city: "Delhi",
    country: "India",
    address: "1122 DLF",
  },
};

const city = user1Nested.address.city;
//
// Assignment:
// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and whose gender is "male". [page:15]
//
//NOTES: we are learning 2 things : objects and arrays. in rust/java(objects are called hashmaps and arrays are called vectors)
//object : key value stores : collection of key value pairs. each key is a string and each value can be any valid JS type (including another object).

console.log("------object example------");
let userName1 = "rishabh";
let userAge1 = 21;
let userGender1 = "male";

let userName2 = "rishu";
let userAge2 = 10;
let userGender2 = "male";

//now write function which can tell if they are allowed to vote or not
console.log("------function example with if-else------");
function isVote(name, age) {
  if (age >= 18) {
    console.log(name + " is allowed to vote as he is " + age);
  } else {
    console.log(name + " is not allowed to vote as he is " + age);
  }
}
console.log("gonna print if they are elegibal to vote or not ");
isVote(userName1, userAge1);
isVote(userName2, userAge2);
//Loops : used to repeat a block of code multiple times.
console.log("------loops example 4 times------");
for (let i = 0; i < 4; i++) {
  console.log("hello world number : ", i);
}

// ==============================
// End - Complex types
// ==============================
