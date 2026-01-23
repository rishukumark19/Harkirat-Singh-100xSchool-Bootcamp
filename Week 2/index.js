// Link:https://petal-estimate-4e9.notion.site/2nd-class-JS-101-2f17dfd107358074a477dc0f71bf9a11?pvs=143

console.log("Hi there");

// Javascript - The basics

// Web development
// Web development involves writing a lot of HTML, CSS and JS code.
// Historically (and even today to some extent), browsers could only understand HTML, CSS and JS.
// Any website you see is just a bunch of HTML, CSS and JS files plus some assets (images, videos, etc).

// Facts / Callouts
// 1. React and Next.js are frameworks that ultimately compile down to plain HTML, CSS and JS,
//    because that is what the browser actually understands.
// 2. When you run your C++ code on platforms like LeetCode, it does not execute in your browser
//    or on your local machine; it runs on a remote server instead, since the browser cannot
//    directly compile and run C++ (with rare exceptions).
// 3. If someone asks what languages a browser can interpret, the answer is:
//    HTML, CSS, JavaScript and WebAssembly. A browser can technically run C++/Rust code only
//    after it has been compiled to WebAssembly (Wasm).

//--------------------------------------------------------------------------------------------------------------
// Properties of JavaScript

// Every language comes with its own unique set of features. .
// JavaScript has the following key **properties**. .

// 1. Interpreted
// JavaScript is an interpreted language, executed line-by-line at runtime
// by the JS engine in the browser or server, instead of being compiled to
// machine code beforehand. .

// Upsides: .
// - There is one less step to do before running your code (no separate compile step). .

// Downsides: .
// - Performance overhead due to runtime interpretation. .
// - More prone to runtime errors because many issues only show when the code runs. .

// 2. Dynamically Typed
// Variables in JavaScript are not bound to a specific data type. .
// Types are determined at runtime and can change as the program executes. .

// C++ code example (won’t compile): .
// int a = 1;
// a = "hello";
// a = true;

// JS code example (valid):
// var a = 1;
// a = "harkirat";
// a = true;
// console.log(a); .

// 3. Single threaded
// JavaScript executes code in a single-threaded environment,
// meaning it processes one task at a time. .
// You will usually rely on async patterns (callbacks, promises, async/await) to handle concurrency. .

// 4. Garbage collected
// JavaScript automatically manages memory allocation and deallocation
// through garbage collection. .
// The engine reclaims memory from objects that are no longer reachable,
// which helps reduce memory leaks. .

// Conclusion
// Is JS a good language? The answer is both yes and no. .
// It is beginner friendly, but has noticeable performance overhead compared to low-level languages. .
// Runtimes like Bun are trying to fix many performance issues, but JS still lags behind
// languages like C++ and Rust for raw performance.

//--------------------------------------------------------------------------------------------------------------
// Syntax of JavaScript

// 1. Variables
// Variables are used to store data. You declare them using var, let, or const.

let name = "John"; // Variable that can be reassigned
const age = 30; // Constant variable that cannot be reassigned
var isStudent = true; // Older way to declare variables, function-scoped

// Assignment:
// Create a variable for each of the following: your favorite color, your height in centimeters,
// and whether you like pizza. Use let/const/var appropriately and log them with console.log.

// 2. Data types
// Common JS data types: number, string, boolean, array, object, etc.

let number = 42; // Number
let string = "Hello World"; // String
let isActive = false; // Boolean
let numbers = [1, 2, 3]; // Array

// 3. Operators
// Operators perform operations on values: arithmetic, comparison, logical, etc.

let sum = 10 + 5; // Arithmetic operator
let isEqual = 10 === 10; // Comparison operator
let isTrue = true && false; // Logical operator

// 4. Functions
// Functions group reusable logic. You define them once and call them multiple times.

// Function declaration
function greet(name) {
  return "Hello, " + name;
}

// Function call
let message = greet("John"); // "Hello, John"

// Assignment #1:
// Write a function sum that finds the sum of two numbers.
// Side quest: Pass a string instead of a number and observe what happens.

// Assignment #2:
// Write a function canVote that returns true or false depending on whether age > 18.

// 5. If/Else
// If/else is used for conditional branching in your code.

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
} //

// Assignment:
// Write an if/else statement that checks if a number is even or odd.
// If it's even, print "The number is even." Otherwise, print "The number is odd."

// 6. Loops
// Loops let you repeat a block of code multiple times.

// For loop
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs 0 to 4
}

// While loop
let j = 0;
while (j < 5) {
  console.log(j); // Outputs 0 to 4
  j++;
}

// Assignment:
// Write a function called sum that finds the sum from 1 to a given number.

//--------------------------------------------------------------------------------
// Complex types in JavaScript

// 1. Objects
// An object in JavaScript is a collection of key-value pairs.
// Each key is a string, and each value can be any valid JS type (including another object).

let user = {
  name: "Harkirat",
  age: 19,
};

console.log("Harkirat's age is " + user.age); // dot notation to access a property

// Assignment #1:
// Write a function that takes a user object as input and greets them with their name and age.
// Example shape: { name: "Harkirat", age: 21 }

// Assignment #2:
// Write a function that takes a new object with name, age and gender and greets the user
// with their gender.
// Example: "Hi Mr/Mrs/Others Harkirat, your age is 21".

// Assignment #3:
// Extend the greeting to also tell the user if they are legal to vote or not.

// 2. Arrays
// Arrays let you group related data together in an ordered list.

const users = ["harkirat", "raman", "diljeet"];
const totalUsers = users.length; // number of items in the array
const firstUser = users[0]; // accessing by index (0-based)

// Assignment:
// Write a function that takes an array of numbers as input and returns a new array
// with only even values. Read about Array.prototype.filter in JS.

// 3. Array of objects
// You can combine arrays and objects to represent more complex structures.

const usersList = [
  {
    name: "Harkirat",
    age: 21,
  },
  {
    name: "raman",
    age: 22,
  },
];

const firstUserObj = usersList[0]; // first object in the array
const firstUserAge = usersList[0].age; // age of the first user

// Assignment:
// Write a function that takes an array of users as input and returns only the users
// who are more than 18 years old.

// 4. Object of objects (nested objects)
// Objects can contain other objects as values, enabling nested structures.

const user1 = {
  name: "harkirat",
  age: 19,
  address: {
    city: "Delhi",
    country: "India",
    address: "1122 DLF",
  },
};

const city = user1.address.city; // accessing nested property

// Assignment:
// Create a function that takes an array of objects as input and returns the users
// whose age > 18 and are male.
