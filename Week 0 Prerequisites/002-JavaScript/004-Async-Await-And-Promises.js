//Async functions vs sync functions, real use of callbacks
// JS Browser architecture
// Promises
// Async await

//Async functions vs sync functions

// what does synchronous mean?
//run one after another ,line by line,only one thing happening at a time

//what does asynchronous mean?
//opposit of synchronous
//happens in part
//multiple things happening at a time
//context switching between tasks

//can js be async ?
//yes ,using callbacks ,promises ,async await,setTimeout ,setInterval ,fetch api

// What are common async functions?
// setTimeout
// fs.readFile - to read a file from your filesystem
// Fetch - to fetch some data from an API endpoint

// Lets introduce an asynchronous function (setTimeout)
function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100() {
  console.log(findSum(100));
}

setTimeout(findSumTill100, 1000); //this is print later after 1 second
console.log("hello world"); //this is print first

//synk sleep(busy wait) its a way to block the main thread for some time

//Lets try fs to read a file
const fs = require("fs"); //filesystem module(fs) is used to work with files
const { resolve } = require("path");

fs.readFile("a.txt", "utf-8", function (err, data) {
  //annonanymous callback function
  console.log(data);
});
console.log("Reading file..."); //this will print first because readFile is async

//Promises
//why use promises? : cause callbacks are ugly way to write async code(callback hell)

var d = new Promise(); //creating a promise object
//have to give first argument as a function
//promise has 3 states : pending ,fulfilled(resolved) ,rejected
var d = new Promise(function (resolve) {}); //creating a promise object
console.log(d); //pending

//example of promise
var d = new Promise(function (resolve) {
  resolve("Promise resolved successfully");
});
function callback(data) {
  console.log(data);
}
d.then(callback); //then is used to handle resolved promise

//Async await
//async await is syntactic sugar over promises
//makes async code look like sync code
function func1() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("func1 resolved");
    }, 2000);
  });
}

function kiratsAsyncFunction() {
  let p = new Promise(function(resolve) {
    // do some async logic here
    resolve("hi there!")
  });
  return p;
}

async function main() {
  const value = await kiratsAsyncFunction();
  console.log(value);
}

main();

-----------------------------------------------------------------------------
1. Callbacks, 
2. Async functions
3. Promises 
4. JS functions (map, filter)
5. Assignment

Pre-requisites - Functions, var, const, data types in JS

Callbacks:
functions which are passed as arguments to other functions and are invoked inside that function.
Example:

function square(n){
  return n*n;
}
function cube(n){
  return n*n*n;
}

function sumOfSquares(a,b){          
  let sq1=square(a);
  let sq2=square(b);
  return sq1+sq2;
}
function sumofCubes(a,b){
  let c1=cube(a);
  let c2=cube(b);
  return c1+c2;
}

now this looks okay but what if we have to do sum of fourth powers, fifth powers and so on.
We can use callbacks to make this more generic.

//generic function 
function sumOfSomething(a,b,powerFunction){
  let val1=powerFunction(a);
  let val2=powerFunction(b);
  return val1+val2;
}
Functional arguments:
let ans=sumOfSomething(2,3,square); //13
console.log(ans);
OR 

function sumOfSomething(a,b){
  let val1=square(a);
  let val2=square(b);
  return val1+val2;
}
let ans=sumOfSomething(2,3); //13
console.log(ans);


2.Async functions:
//functions which run in the background and do not block the main thread
//examples: setTimeout, setInterval, fetch, fs.readFile
What is async? - Asynchronous 
1. Your javascript thread doesn’t have access to everything immediately 
2. There are some tasks it needs to wait for 
For example -  
1. Reading a file 
2. Sending a network request 
3. A deliberate timeout
4. Waiting for user input


Callback Hell: Nested callbacks which make the code hard to read and maintain.
//example of callback hell

Promises: use to increase readability of async code and avoid callback hell
A promise is an object that may produce a single value some time in the future: either a resolved value or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.

promise in js is for eventual complition of task .
let promise =new promise ((resolve, reject)=>{})    : 2 handlers/callbacks



