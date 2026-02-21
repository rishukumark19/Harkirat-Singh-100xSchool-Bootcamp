// ==============================
// Synchronous code
// ==============================

// Synchronous code - Basics
// -------------------------
// Synchronous code runs line-by-line in the order it is written.
// Each statement must finish before the next one starts.
// Later lines wait (are blocked) until earlier lines are done.
// Most beginner JS code (simple logs, math, basic functions) is synchronous.

// Example:
// --------
// const a = 10;
// const b = 20;
// const sum = a + b;
// console.log(sum);
//
// Here:
// 1) `a` is set.
// 2) `b` is set.
// 3) `sum` is computed.
// 4) `console.log(sum)` finally runs.

// Real example - sum function
// ---------------------------
// function sum(n) {
//   let ans = 0;
//   for (let i = 1; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }
//
// const ans1 = sum(100);
// console.log(ans1);
// const ans2 = sum(1000);
// console.log(ans2);
// const ans3 = sum(10000);
// console.log(ans3);
//
// In synchronous execution:
// - `sum(100)` must finish completely before `console.log(ans1)` runs.
// - Only after that `sum(1000)` starts, then logs.
// - Then `sum(10000)` runs and logs.
// The main thread is busy with one thing at a time.

// When synchronous code is fine
// -----------------------------
// - Small scripts with light computations.
// - Quick utilities.
// - Teaching/learning basic control flow.

// ==============================
// I/O heavy operations
// ==============================

// What are I/O heavy operations?
// ------------------------------
// I/O (Input/Output) heavy operations are tasks that spend most time
// waiting on external systems: disk, network, database, etc.
// They are slow compared to in-memory CPU calculations.

// Examples of I/O heavy operations
// --------------------------------
// - Reading/writing files from disk.
// - Making HTTP requests to APIs.
// - Querying a database.
// - Any operation where you ask for data and then wait.

// Synchronous file read example (Node.js)
// ---------------------------------------
// const fs = require("fs");
// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);
//
// `readFileSync` blocks until the file is read completely.
// Only then does the next line (`console.log`) execute.

// Reading two files synchronously
// -------------------------------
// const fs = require("fs");
//
// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);
//
// const contents2 = fs.readFileSync("b.txt", "utf-8");
// console.log(contents2);
//
// Flow:
// - Read a.txt fully, then log.
// - Then read b.txt fully, then log.
// If files are large/slow, everything after these lines has to wait.

// Why this is suboptimal in big apps
// ----------------------------------
// - Blocks the main thread during I/O.
// - Reduces concurrency on servers.
// - Can make apps feel slow or stuck.

// ==============================
// I/O bound tasks vs CPU bound tasks
// ==============================

// CPU bound tasks
// ---------------
// CPU bound tasks are limited by how fast the CPU can compute.
// Most time is spent doing calculations, not waiting on I/O.
//
// Example CPU bound loop:
// -----------------------
// let ans = 0;
// for (let i = 1; i <= 1000000; i++) {
//   ans = ans + i;
// }
// console.log(ans);
//
// The CPU is continuously busy in this loop.

// I/O bound tasks
// ---------------
// I/O bound tasks are limited by I/O speed (disk, network, DB).
// Most time is spent waiting for data to be read/written.
//
// Example I/O bound snippet:
// --------------------------
// const fs = require("fs");
// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);
//
// Here the disk speed matters more than CPU speed.

// Why this difference matters
// ---------------------------
// - CPU bound code can freeze JS if it runs too long on the main thread.
// - I/O bound code is better handled asynchronously,
//   so JS can do other work while waiting.

// ==============================
// Doing I/O bound tasks in the real world
// ==============================

// Real world I/O tasks
// --------------------
// - Calling external APIs (auth, payments, etc.).
// - Reading/writing from databases.
// - Handling file uploads/downloads.
// - Sending emails, SMS, push notifications.

// Pattern in real apps (high level)
// ---------------------------------
// - Avoid synchronous I/O in request handlers.
// - Use async functions so the event loop can keep serving other work.
// - Typical flow: read from DB -> call API -> write to DB -> respond to user,
//   all using async I/O so nothing blocks the main thread.

// ==============================
// Functional arguments
// ==============================

// What are functional arguments?
// ------------------------------
// In JavaScript, functions are first-class.
// You can:
// - Assign them to variables,
// - Pass them as arguments,
// - Return them from other functions.
// When you pass a function as an argument, that parameter is a functional argument.

// Calculator problem
// ------------------
// Write a calculator that can add, subtract, multiply, divide two numbers.

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

// Higher-order function
function doOperation(a, b, op) {
  return op(a, b);
}

console.log(doOperation(1, 2, sum));
console.log(doOperation(4, 2, subtract));
console.log(doOperation(3, 5, multiply));
console.log(doOperation(10, 2, divide));

// Here:
// - `op` is a functional argument.
// - The same `doOperation` can be used for any operation (sum, subtract, etc.).

// Why functional arguments matter
// -------------------------------
// - Make code more reusable and flexible.
// - Core idea behind callbacks, `map`, `filter`, `reduce`.
// - Used everywhere in async code.

// ==============================
// Asynchronous code, callbacks
// ==============================

// What is asynchronous code?
// --------------------------
// Asynchronous code starts a task now and finishes it later,
// without blocking the main thread.
// JS can continue running other code while it waits.
// When the task finishes, a callback (or promise handler) runs.

// Asynchronous file read with callback (Node.js)
// ----------------------------------------------
const fs2 = require("fs");

fs2.readFile("a.txt", "utf-8", function (err, contents) {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  console.log(contents);
});

console.log("This will likely run before the file contents");

// What is a callback?
// -------------------
// A callback is a function passed to another function,
// to be executed later when some work finishes.
// In async code, callbacks run when I/O completes (file read, network response, timer, etc.).

// setTimeout example (timer)
// --------------------------
function run() {
  console.log("I will run after 1s");
}

setTimeout(run, 1000);
console.log("I will run immediately");

// Output order:
// - "I will run immediately"
// - (after ~1 second) "I will run after 1s"
// NOTES :
//Which one will print first ? : a.txt or sum

const fs = require("fs");
function fileReadCallback(err, contents) {
  console.log("File read callback started");
}
fs.readFile("a.txt", "utf-8", fileReadCallback);
let s = 0;
for (let i = 0; i < 1000000000; i++) {
  s++;
}
console.log(s);

// ==============================
// JS Architecture for async code
// ==============================

// Overview
// --------
// JS is single-threaded, but can still handle async tasks using:
// - Call stack
// - Web APIs / Node APIs
// - Callback queue
// - Event loop

// Call stack
// ----------
// The call stack keeps track of which function is currently running.
// It is LIFO (Last In, First Out).

function first() {
  console.log("First");
}

function second() {
  first();
  console.log("Second");
}

second();

// Flow:
// - `second` pushed on stack.
// - `first` pushed, logs, then popped.
// - `second` logs, then popped.

// Web APIs / Node APIs
// --------------------
// Browser / Node provide APIs like:
// - setTimeout
// - fetch / HTTP requests
// - fs.readFile
// They handle the slow work outside the JS engine.

// Callback queue
// --------------
// When an async operation finishes, its callback is put into the callback queue.
// The queue holds callbacks that are ready to run.

// Event loop
// ----------
// The event loop continuously checks:
// - Is the call stack empty?
// - Is there a callback in the queue?
// If stack is empty and queue is non-empty,
// it moves the first callback from the queue to the stack,
// so it can run.

// Simple event loop example
// -------------------------
// console.log("Start");
//
// setTimeout(function () {
//   console.log("Inside timeout");
// }, 1000);
//
// console.log("End");
//
// Output:
// - "Start"
// - "End"
// - (after ~1s) "Inside timeout"
//
// Reason:
// - `setTimeout` registers the timer in Web APIs and returns.
// - "End" logs while the timer is still counting.
// - When timer is done, callback goes to queue.
// - Event loop moves callback to stack when it's free, then logs "Inside timeout".
// NOTES:
let counter = 0;
function callback() {
  counter++;
  console.log(counter);
}
setInterval(callback, 1000);
let count = 0;
for (let i = 0; i < 10; i++) {
  count++;
}
console.log(count);
// ==============================
// End - Class 2 JS 101 (from synchronous code onwards)
// ==============================
