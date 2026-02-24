// ==============================
// Week 5 - Notes Index
// ==============================
//
// 1. What we’re doing today
//    - Overview of the plan for this week: going deeper into Promises and async/await.
//    - You will learn what a Promise is, how to create one, how to consume it using
//      .then() / .catch() and async/await, and how to define your own async functions.
//
// 2. What is a promise
//    - A Promise is an object that represents the eventual completion (success or failure)
//      of an asynchronous operation and its resulting value.
//    - It has three main states: pending (still working), fulfilled (resolved with a value),
//      and rejected (failed with an error).
//    - Promises act as a link between “producing code” (doing the async work) and
//      “consuming code” (what should happen when the result is ready).
//
// 3. Creating a promise
//    - You create a Promise using the `new Promise((resolve, reject) => { ... })` constructor.
//    - Inside the executor function, you perform some async task, and then call:
//      - resolve(value) -> when the operation succeeds
//      - reject(error)  -> when the operation fails
//    - Example pattern:
/*
      const p = new Promise((resolve, reject) => {
          // do async work
          if (ok) resolve(result);
          else reject(error);
      });
*/
//
// 4. Consuming a promise
//    - Once you have a Promise, you “consume” it with: `promise.then(onFulfilled).catch(onRejected);`
//    - `.then()` runs when the Promise is fulfilled and can return a new value or Promise,
//      allowing you to chain multiple async steps.
//    - `.catch()` runs when the Promise is rejected and centralizes error handling.
//    - You can also use `.finally()` for cleanup that should run whether it succeeded or failed.
//
// 5. Async/await syntax
//    - async/await is a nicer syntax for working with Promises, not a different feature.
//    - `async` before a function means it always returns a Promise (even if you return a plain value).
//    - `await` pauses inside an async function until the given Promise settles, then gives you its
//      value or throws its error, which you can catch with try/catch.
//    - This lets you write asynchronous flows in a top‑to‑bottom, synchronous-looking style.
//
// 6. Async await syntax (practice page)
//    - This page focuses on writing actual code with async/await: waiting for timers, API calls,
//      or file operations using `await` instead of chaining `.then()`.
//    - You practice rules like “await only inside async functions” and handling errors
//      with try/catch around awaited Promises.
//    - Goal: get comfortable reading and writing async/await sequences.
//
// 7. Defining your own async function
//    - You learn to write your own async functions that internally use Promises or
//      Promise‑based APIs and expose a clean async interface.
//    - Example pattern:
/*
      async function doWork() {
          const result = await somePromiseReturningFn();
          return result; // automatically wrapped in a Promise
      }
*/
//    - Callers can then use either: `doWork().then(...).catch(...)` or `await doWork()`
//
// ==============================
// End of "Week 5" index notes
// ==============================

// ==============================
// What we're doing today - Notes
// ==============================
//
// Context (Recap of Week 3, 4)
// - Async function calls (timers, fs.readFile) and fs.readFileSync:
//   - We already saw how JavaScript handles async operations like timers and file reads,
//     and how fs.readFileSync blocks while fs.readFile is non‑blocking.
// - Classes, Date, Map:
//   - We learned how to model data with classes, and briefly used built‑in classes like Date and Map.
// - Wrote our own classes – Rect, inheritance:
//   - We practiced building custom classes and used inheritance to share common behavior.
// - Promise (usage only):
//   - We know how to *use* promisified functions with .then() and .catch(), and saw promise chaining.
//
// Week 5 Focus
// - How to write your own promises:
//   - Learn how to construct a Promise using `new Promise((resolve, reject) => { ... })`.
//   - Wrapping fs.readFile, setTimeout, or API calls into your own Promise-returning functions.
// - Writing Promise class yourself (hard):
//   - Stretch goal: implement a simplified custom Promise-like class.
// - Async/await syntax:
//   - Practice rewriting Promise chains into async/await functions.
// - Practice:
//   - Apply all of the above: creating Promises, consuming them with then/catch and async/await.
//
// Big picture
// - Weeks 3–4: learned the *tools* (callbacks, classes, basic Promise usage).
// - Week 5: learn how to *build and design* those tools yourself.
//
// ==============================
// End of "What we're doing today" notes
// ==============================

// ==============================
// What is a promise - Notes
// ==============================
//
// Definition
// - A Promise in JavaScript is an object that represents the eventual result of an
//   asynchronous operation — either a success (resolved) or a failure (rejected).
// - It is used for async tasks like fetching data, reading files, timers, and database requests.
// - Think of it as a placeholder for a value that you’ll get in the future.
//
// Why we need Promises
// - Asynchronous operations don’t finish immediately.
// - Promises give a clean way to separate:
//   - The code that *does* the async work (producer).
//   - The code that *uses* the result (consumer), via .then() and .catch().
// - This helps avoid callback hell and makes async code easier to reason about.
//
// Promise states
// 1. Pending   -> the async operation is still in progress.
// 2. Fulfilled -> the operation completed successfully and produced a value.
// 3. Rejected  -> the operation failed and produced an error/reason.
// - Once a Promise becomes fulfilled or rejected, it is **settled** and its state cannot change.
//
// Mental model
// - Promise = “I’ll give you this value later.”
// - While it’s pending, you can attach handlers.
// - When it settles:
//   - fulfilled -> .then() callbacks run.
//   - rejected  -> .catch() callbacks run.
//
// ==============================
// End of "What is a promise" notes
// ==============================

// ==============================
// Creating a promise - Notes
// ==============================
//
// Example Code:
/*
const myPromise = new Promise((resolve, reject) => {
    let success = true; 
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed.");
    }
});
*/
//
// What this code is doing
// - `new Promise((resolve, reject) => { ... })` creates a new Promise object.
// - The function `(resolve, reject) => { ... }` is the *executor function*.
// - Inside the executor, you call `resolve(value)` or `reject(reason)`.
//
// Roles of resolve and reject
// - resolve(value): Moves state to fulfilled; triggers .then().
// - reject(reason): Moves state to rejected; triggers .catch().
// - A Promise should call *exactly one* of these once.
//
// Consuming this promise
/*
myPromise
    .then((message) => {
        console.log("Success:", message);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
*/
//
// Where async normally comes in
/*
const p = new Promise((resolve, reject) => {
    asyncOperation((err, result) => {
        if (err) reject(err);
        else resolve(result);
    });
});
*/
//
// ==============================
// End of "Creating a promise" notes
// ==============================

// ==============================
// Consuming a promise - Notes
// ==============================
//
// Example Code:
/*
myPromise
    .then(result => {
        console.log(result); // if resolved
    })
    .catch(error => {
        console.log(error);  // if rejected
    });
*/
//
// - .then(handler): Registers a function for success. Returns a *new* Promise for chaining.
// - .catch(handler): Registers a function for failure. Usually at the end of a chain.
//
// Comparison to async/await:
/*
try {
    const result = await myPromise;
    console.log(result);
} catch (error) {
    console.log(error);
}
*/
//
// ==============================
// End of "Consuming a promise" notes
// ==============================

// ==============================
// Async/await syntax - Notes
// ==============================
//
// Example Code:
/*
async function run() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
run();
*/
//
// What async does: Marks function as returning a Promise.
// What await does: Pauses execution until the Promise settles.
//
// Key rules:
// - `await` only inside `async` functions.
// - Use `try/catch` for error handling.
//
// ==============================
// End of "Async/await syntax" notes
// ==============================

// ==============================
// Async / await syntax (Assignment)
// ==============================
//
// Assignment: Write code that logs "hi" after 1s, "hello" 3s later, and "hi there" 5s later.
//
// Helper:
/*
function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
*/
//
// Solution:
/*
async function solve() {
    await setTimeoutPromisified(1000);
    console.log("hi");

    await setTimeoutPromisified(3000);
    console.log("hello");

    await setTimeoutPromisified(5000);
    console.log("hi there");
}
solve();
*/
//
// ==============================
// End of "Async await syntax (assignment)"
// ==============================

// ==============================
// Defining your own async function
// ==============================
//
// Question: Write a function to read, trim, and write back to a file.
//
// 1. Callback approach:
/*
function cleanFile(filePath, callback) {
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) return;
        const cleaned = data.trim();
        fs.writeFile(filePath, cleaned, (err) => {
            if (err) return;
            callback();
        });
    });
}
cleanFile("a.txt", () => console.log("file has been cleaned"));
*/
//
// 2. Promisified (async/await) approach:
/*
function readFilePromisified(path, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

function writeFilePromisified(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

async function cleanFile(filePath) {
    const data = await readFilePromisified(filePath, "utf-8");
    const cleaned = data.trim();
    await writeFilePromisified(filePath, cleaned);
}

async function main() {
    try {
        await cleanFile("a.txt");
        console.log("Done cleaning file");
    } catch (err) {
        console.error("Error:", err);
    }
}
main();
*/
//
// ==============================
// End of "Defining your own async function"
// ==============================
