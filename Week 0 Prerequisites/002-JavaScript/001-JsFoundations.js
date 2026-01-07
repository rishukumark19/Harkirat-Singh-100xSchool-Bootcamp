/*
-----------Javascript Foundation------------
TOPICS:
        Why languages?
        Interpreted vs compiled languages
        Why JS >> Other languages in some use-cases
        Strict vs dynamic languages
        Single threaded nature of JS
         Slightly advanced topics:
        Simple primitives in JS (number, strings, booleans)
        Complex primitives in JS (arrays, objects)
        Functions in Javascript
        Practise problem solving    
          ADV topics:
        Callback functions, Event loop, callback queue, Asynchronous programming
        Callback hell and Promises
---------------------------------------------------------------------------------------
1.Why languages?
-----------------
         --- RAM: Random Access Memory  -photos ,videos reside here when u r using them
Computer |                              -only understands binary (0s and 1s)
         --- SSD: Solid State Drive     - when you run a program(photo/video) its loaded from SSD to RAM
                                        -only understands binary (0s and 1s)

languages are used to write applications
in the end , all the language convert high level into 0's and 1's 
Every language has a compiler which converts the developer code into 01


2.Interpreted vs compiled languages
------------------------------------
compilers-convert high level developer friendly code into 0s and 1s
c++(compiled language): first convert high level code(all together) into binary ,then run 
INTO JS(interpreted language):interpret line by line,and run
compiled languages                                - interpreted languages
1. First need to compile, then need to run        |  1.Usually go line by line     
2. Usually don’t compile if there is              |  2.Can run partially if the error comes later 
an error in the code                              |  3.Example - Javascript, Python
3. Example - C++, Java, Rust, Golang 


How to run js code :
console.log("Hello World"); //print output to console


3.Why JS >> Other languages in some use-cases
---------------------------------------------
browser can only understand JS html css(not technically true)


4.Static vs dynamic languages
--------------------------------
static
-more strict about variable types
-datatype of variable is known at compile time
-ex:java,c++,rust
dynamic
-less strict about variable types
-datatype of variable is known at run time
-ex:js,python,ruby


5.Single threaded nature of JS
--------------------------------
-JS executes code in a single-threaded env , meaning it processes one task at a time.
-This means that only one operation can be performed at a time within a single thread of execution.
-While this simplifies the programming model and avoids certain concurrency issues, it can also lead to performance bottlenecks, especially when dealing with I/O-bound operations or tasks that require waiting.
-To mitigate this limitation, JS employs asynchronous programming techniques, such as callbacks, promises, and async/await, allowing certain operations to be executed in the background without blocking the main thread.
-this is why it is consider to be a bad language for scalable systems

6.Simple primitives in JS (number, strings, booleans)
-----------------------------------------------------
Variables(let,const,var) : are used to store data type ,  can also change in js . VAR LET  CONST
Data types-strings,number,boolean
If/else conditions
Loops-For loop

Let’s write some code -  
1. Write the program to greet a person given their first and last name 
2. Write a program that greets a person based on their gender. (If else) 
3. Write a program that counts from 0 - 1000 and prints (for loop)

let firstName = "Rishu";
let lastName = "Kumar";
let gender = "male";
console.log("Hi " + firstName + " " + lastName + ".Hope you doing well.");

if (gender === "male") {
  console.log(firstName + " " + lastName + " is a " + gender + ".");
} else {
  console.log(firstName + " " + lastName + " is a " + gender + ".");
}

for (let i = 0; i <= 1000; i++) {
  console.log(i);
}

7.Complex primitives in JS (arrays, objects)
---------------------------------------------
1. Arrays 
  let persons = ["Rishu", "Anjali", "Aman", "Neha"];
  -used to store multiple values in a single variable
  -ordered collection of items
  console.log(persons[0]); //prints Rishu
2. Objects
  let person = {
    firstName: "Rishu",
    lastName: "Kumar",
    age: 21,
    gender: "male",
  };
  -used to store multiple values in a single variable
  -key-value pairs
  console.log(person.firstName); //prints Rishu
  console.log(person["lastName"]); //prints Kumar

  Array of objects
  const peopleArray = [
    { firstName: "Rishu", lastName: "Kumar", gender: "male" },
    { firstName: "Anjali", lastName: "Sharma", gender: "female" },
    { firstName: "Aman", lastName: "  Singh", gender: "male" },
    { firstName: "Neha", lastName: "Verma", gender: "female" },
  ];
  console.log(peopleArray[0].firstName); //prints Rishu 
  console.log(peopleArray[1]["lastName"]); //prints Sharma


    Let’s write some code -  
    1. Write a program prints all the even numbers in an array 
    2. Write a program to print the biggest number in an arrya 
    3. Write a program that prints all the male people’s first name given a complex object 
    4. Write a program that reverses all the elements of an array
Method 1
let array = [1, 2, 3, 4, 5, 6];
for (let i = 0; i <= array.length; i++) {
  if (array[i] % 2 == 0) {
    console.log(array[i]);
  }
}
  
Methode 2
let array = [1, 2, 3, 4, 5, 6, 7];
let evenArray = [];
for (let i = 0; i <= array.length; i++) {
  if (array[i] % 2 == 0) {
    evenArray.push(array[i]);
  }
}
console.log(evenArray);

let array = [12, 45, 3, 67, 23, 89, 34];
let biggestArray = 0;
for (let i = 0; i <= array.length; i++) {
  if (array[i] > biggestArray) {
    biggestArray = array[i];
  }
}
console.log("Biggest number is " + biggestArray);

const peopleArray = [
  { firstName: "Rishu", lastName: "Kumar", gender: "male" },
  { firstName: "Anjali", lastName: "Sharma", gender: "female" },
  { firstName: "Aman", lastName: "Singh", gender: "male" },
  { firstName: "Neha", lastName: "Verma", gender: "female" },
];
for (i = 0; i < peopleArray.length; i++) {
  if (peopleArray[i].gender === "male") {
    console.log(peopleArray[i].firstName);
  }
}

let array = [1, 2, 3, 4, 5, 6, 7];
let reverseArray = [];
for (let i = array.length - 1; i >= 0; i--) {
  if (i >= 0) {
    reverseArray.push(array[i]);
  }
}
console.log(reverseArray);

8.Functions in Javascript
--------------------------
-take arguments as input and return valuse as output .
-You can think of them as an independent program that is supposed to do something given an input 
-functioons can take outher functions as input . 
    Let’s write some code -  
    1. Write a function that finds the sum of two numbers 
    2. Write another function that displays this result in a pretty format 
    3. Write another function that takes this sum and prints it in passive tense

function findSum(a, b) {
  return a + b;
}
console.log("return result from function:");
console.log(findSum(1, 2));

function findSumResult(a, b, fnToCall) {
  let sum = a + b;
  fnToCall(sum);
}
function displayResultInPrettyFormat(data) {
  console.log("The sum of the two numbers is: " + data);
}
findSumResult(3, 4, displayResultInPrettyFormat); //CallBack function

SetTimeout function
--------------------------
  -global function provided by JS
  -calls after a delay

function greet() {
  console.log("Hello World");
}
setTimeout(greet, 1 * 1000);

SetInterval function
---------------------------
  -global function provided by JS
  -calls after an intervel 

setInterval(greet, 2 * 1000);

9.Practise problem solving
-----------------------------
1. Create a counter in Javascript (counts down from 30 to 0)
2. Calculate the time it takes between a setTimeout call and the inner function actually running
3. Create a terminal clock (HH:MM:SS)

function countDown() {
  for (i = 30; i >= 0; i--) {
    console.log(i);
  }
}
countDown();
let now = new Date(); // create a Date object , idk y it need to be here , but its gonna be like this ,
let hours = now.getHours(); // get hours
let minutes = now.getMinutes(); // get minutes
let seconds = now.getSeconds(); // get seconds

console.log(hours + ":" + minutes + ":" + seconds);


10.Callback functions, Event loop, callback queue, Asynchronous programming
-----------------------------------------------------------------------------
-callback function : passing function as an argument to another function

function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}

function sumOfSomething(a, b, fn) {    //fn is a callback function
  
  const val1 = fn(a);
  const val2 = fn(b);
  return val1 + val2;
}                                         //functional argument
console.log(sumOfSomething(2, 3, square)); //prints 13

*/
