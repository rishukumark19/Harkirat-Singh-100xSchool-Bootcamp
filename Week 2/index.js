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
