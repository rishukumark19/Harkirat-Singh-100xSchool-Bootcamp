/*

Goal of  class:
1. I/O tasks
2. Callbacks
3. Functional arguments
4. Async vs Sync code
5. Event loops , callback queues,JS

Goal of tmro class:
1. Async await,Promises
2. Practising async JS


assignment : google it : try to create a promosified version of setTImeout |fetch |fs.readFile
*/

//Normal functions in JS
//FInd sum of two numbers
function sum(a, b) {
  //google : parse it to a number
  return a + b;
}
console.log(sum(1, 2));
console.log(sum("1", 2)); //concatination answer : 12

//FInd sum from 1 to a number

function sumToN(n) {
  total = 0;
  for (i = 1; i <= n; i++) {
    total += i;
  }
  return total; // return n*(n+1)
}
console.log(sumToN(3));

//Synchronous code : run line by line , in the order its been writeen .Each operation waits for the previous one to complete before moving on to the next one.

function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

const ans1 = sum(100); //1st this run
console.log(ans1);
const ans2 = sum(1000); //then this
console.log(ans2);
const ans3 = sum(10000); //then this
console.log(ans3);

/*
I/O heavy operations
---------------------
I/O (Input/Output) heavy operations 
refer to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices. 
These operations usually require waiting for data to be read from or written to sources like disks, networks, databases, or other external devices, which can be time-consuming compared to in-memory computations.

eg:reading a file , HTTP requests , starting a clock
*/
const fs = require("fs"); //external library (node js file system module) allows u to work with file system on ur computer

// const contents = fs.readFile("demo.txt", "utf-8");      //running asyncronously
// console.log(contents);

// read from 2 files                                       // running syncronously
const contents1 = fs.readFileSync("demo.txt", "utf-8");
console.log(contents1);

const contents2 = fs.readFileSync("demo.txt", "utf-8");
console.log(contents2);

//Functional arguments     : pasing a function to another function as an argument
//----------------------
function sum(a, b) {
  return a + b;
}
function doOperation(a, b, op) {
  return op(a, b);
}

console.log(doOperation(1, 2, sum));

//Asynchronous code ,callbacks: allows other operations to run while waiting for an I/O operation to complete .Instead of waiting for the I/O operation to finish, the program can continue executing other tasks and handle the result of the I/O operation once it's ready.

const fs1 = require("fs");
function print(err, data) {
  //error first argument
  if (err) {
    console.log("Error reading file");
  } else {
    console.log(data);
  }
}
fs1.readFile("demo.txt", "utf-8", print); //asynchronous
fs1.readFile("demo.txt", "utf-8", print); //asynchronous

console.log("This will print before file contents"); //this gets printed first(famous interview question)

//setTimeout : runs a function after a certain time period
function run() {
  console.log("I will run after 1s");
}
setTimeout(run, 1000);
console.log("I will run immedietely"); //asynchronous code
