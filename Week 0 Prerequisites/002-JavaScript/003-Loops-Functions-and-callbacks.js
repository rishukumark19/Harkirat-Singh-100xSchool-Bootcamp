//Loops, Functions and Callbacks in JavaScript

//Loops
//Calculate sum of 1 to 100
//dumb way : let sum =1+2+3+...+100
//using loops(when u know u want to repeated logic again and again)

let ans = 0;
for (let i = 1; i <= 100; i++) {
  ans = ans + 1;
}
console.log("Sum from 1 to 100 is :" + ans);
//Functions
//Reusable block of code which can be called multiple times
function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}
console.log(sum(10));

//Why do we need functions?
//1. Reusability : write once use multiple times
//2. Modularity : break complex problems into smaller sub problems
//3. Readability : easy to read and understand code
//4. Maintainability : easy to maintain and update code
//Dry principle : Dont repeat yourself

//Callbacks
//A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}

function sumOfSomething(a, b, fn) {
  //fn is a callback function

  const val1 = fn(a);
  const val2 = fn(b);
  return val1 + val2;
} //functional argument
console.log(sumOfSomething(2, 3, square)); //prints 13
