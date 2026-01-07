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

// Lets introduce an asynchronous function (setTimeout)
function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100() {
  return findSum(100);
}

setTimeout(findSumTill100, 1000);
console.log("hello world");
