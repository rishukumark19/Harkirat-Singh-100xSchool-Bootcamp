// ==============================
// Week 4 - Async Deep Dive (Index)
// ==============================
//
// 1. Classes in JS
//    - Blueprint-style way of creating objects with shared structure and behavior (using the `class` keyword).
//
// 2. Inheritance in classes
//    - Mechanism that lets one class reuse and extend another class’s properties and methods using `extends` and `super`.
//
// 3. Some more classes
//    - Additional class features like getters/setters, static methods, and private fields for better encapsulation and APIs.
//
// 4. Promise class
//    - Built-in object representing the eventual completion or failure of an async operation, with `then`, `catch`, and `finally` handlers.[web:29]
//
// 5. Callback hell
//    - Deeply nested callbacks that make async code hard to read, debug, and maintain, often solved using Promises or async/await.[web:22]
//
// 6. Async await syntax
//    - Syntactic sugar over Promises that allows writing async code in a more readable, synchronous-looking style using `async` and `await`.[web:20]
//
// 7. Defining your own async function
//    - Creating functions marked with `async` that automatically return Promises and can use `await` inside to pause until other Promises settle.[web:18]
//
// 8. Err-first callback vs rejects in promises
//    - Error-first callbacks pass errors as the first argument to a callback, while Promises signal errors by calling `reject`, handled with `.catch()` or `try/catch` in async/await.[web:23]
//
// 9. Assignments
//    - Practice problems to implement classes and rewrite callback-based async code using Promises and async/await, reinforcing all concepts from this week.[web:19]
//
// ==============================
// End of Week 4 - Async Deep Dive index
// ==============================
// ==============================
// Classes in JS - Notes
// ==============================
//
// Primitive types
//  - Basic data types that hold a single value (no internal structure).
//  - Common primitive types in JS:
//    1. number      -> e.g. 10, 3.14, -5
//    2. string      -> e.g. "hello", 'Rishu'
//    3. boolean     -> true or false
//
// Complex types
//  - Data types that can hold collections or structured data.
//  - Common complex types in JS:
//    1. Objects     -> key-value pairs, used to model real-world entities.
//    2. Arrays      -> ordered list of values, index-based access.
//
// Classes - overview
//  - In JavaScript, classes are a way to define blueprints for creating objects.
//  - The objects created from a class are called instances of that class.
//  - Classes help group related data (properties) and behavior (methods) together.
//  - They sit on top of JavaScript's prototype system and provide a cleaner syntax.[web:4]
//
// Example: Rectangle class
//  - This class models a rectangle with width, height, and color.
//  - It has:
//    - A constructor to initialize the rectangle
//    - An area() method to calculate area
//    - A paint() method to "use" the color
//
//  class Rectangle {
//    constructor(width, height, color) {
//      this.width = width;      // property for width
//      this.height = height;    // property for height
//      this.color = color;      // property for color
//    }
//
//    area() {
//      const area = this.width * this.height;
//      return area;
//    }
//
//    paint() {
//      console.log(`Painting with color ${this.color}`);
//    }
//  }
//
//  const rect = new Rectangle(2, 4, "red");
//  const area = rect.area();
//  console.log(area);           // 8
//  rect.paint();                // Painting with color red
//
// Key Concepts
//
// 1. Class Declaration
//    - You declare a class using the `class` keyword followed by the class name.
//    - Inside a class, you define:
//      - properties (variables on `this` inside constructor)
//      - methods (functions without the `function` keyword inside the class body).
//    - Class names are usually written in PascalCase (e.g. Rectangle, User, BankAccount).
//
// 2. Constructor
//    - A special method inside the class that runs automatically when you do `new ClassName()`.
//    - Used to set up / initialize the object’s properties.
//    - Each instance of the class gets its own copy of these property values.
//    - If you do not define a constructor, JS provides a default empty one.
//
// 3. Methods
//    - Functions defined inside the class that describe the behavior of that class.
//    - All instances of the class can call these methods.
//    - They usually use `this` to access the instance’s properties.
//    - Example: `area()` and `paint()` are methods of the Rectangle class.
//
// 4. Inheritance (high-level intro)
//    - Classes can inherit properties and methods from other classes using the `extends` keyword.
//    - This allows you to create a new class based on an existing one,
//      reusing code and adding new features.
//    - Example idea (not full code here):
//      - Shape (base class) -> Rectangle, Circle (child classes).
//
// 5. Static Methods
//    - Methods that belong to the class itself, not to individual instances.
//    - Called directly on the class: `Rectangle.fromSquare(5)` (example pattern).
//    - Often used for helper/utility functionality related to the class, but not
//      tied to a specific object’s data.
//
// 6. Getters and Setters (concept)
//    - Special methods that control how properties are read and updated.
//    - `get someProp()` is used when you access `instance.someProp`.
//    - `set someProp(value)` is used when you assign `instance.someProp = value`.
//    - They help add validation, computed properties, or custom logic
//      when reading/writing values without changing the external API.
//
// Why use classes?
//  - To organize code around models/entities (User, Product, Rectangle, etc.).
//  - To avoid repeating the same object creation logic again and again.
//  - To share behavior between objects using methods and (later) inheritance.
//  - To make large codebases easier to reason about and maintain.
//

//NOTES:

//basic function
function sum(a, b) {
  return a + b;
}                        //using premitives like intergers : simple premitive types in js
console.log(sum(1, 2)); //output: 3

//object                
let user1 = {
  name: "myname",
  age: 21,
};
console.log(user1.name);
console.log(user1.age);

//array
let arr = [1, 2, 3, 4, 5];
let user = {
  name: "myname",
  age: 21,
  city: ["delhi", "blr"],
};
console.log(user.city)      //is an array
console.log(user.city[0]); //output: prints first element of array

//Classes: in js , classes are a way to define blueprint    of creating objects(not the js object but um , bunch of function and proterties together )
//       : when u want smth like ; when bunch of properties and functions attached to an object

//SYNTEX:
class Rectangle {                      //class name
  constructor(width, height, color) { //always have to define constructor in class(function only)
    this.width = width;               //whenvever a new rectange is made  , constructer will be created adn it will take innitial arguments 
    this.height = height;             //this : refers to the object which is being created
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}

const rect = new Rectangle(2, 4);
const area = rect.area();
console.log(area);

// ==============================
// End of "Classes in JS" notes
// ==============================
// ==============================
// Inheritance in classes - Notes
// ==============================
//
// What is inheritance?
//  - Inheritance allows one class (child/subclass) to reuse and extend another class (parent/superclass).
//  - The child class automatically gets the parent’s properties and methods.
//  - This helps remove duplicate code and makes it easier to add new types of objects
//    that share common behavior.
//
// Why do we need it here?
//  - We had a Rectangle class and a Circle class with repeated code:
//    - both had a `color` property
//    - both had a `paint()` method doing the same thing
//  - Instead of repeating `color` and `paint()` in every shape,
//    we move them to a common base class: `Shape`.
//
// ==============================
// Assignment #1 - Circle class (without inheritance)
// ==============================
//
//  - This is the initial Circle implementation.
//  - Notice it has `radius`, `color`, `area()` and `paint()`.
//  - `paint()` here is the same idea as in the Rectangle example
//    (console.log with color).
//
//  class Circle {
//    constructor(radius, color) {
//      this.radius = radius;
//      this.color = color;
//    }
//
//    area() {
//      const area = this.radius * this.radius * Math.PI;
//      return area;
//    }
//
//    paint() {
//      console.log(`Painting with color ${this.color}`);
//    }
//  }
//
//  const circle = new Circle(2, "red");
//  const area = circle.area();
//  console.log(area);
//
// 💡 Note:
//  - There is code repetition between this Circle and the Rectangle class
//    from the previous notes (both have `color` and `paint()`).
//  - Inheritance will fix this by extracting shared parts into a base class.
//
// ==============================
// Assignment #2 - Create a base Shape class
// ==============================
//
// Base class: Shape
//  - Represents a generic shape that has a `color`.
//  - Provides common behavior (`paint`, `getDescription`) that all shapes can share.
//  - Defines an `area()` method that throws an error by default,
//    forcing child classes to implement their own area logic.
//
//  class Shape {
//    constructor(color) {
//      this.color = color;
//    }
//
//    paint() {
//      console.log(`Painting with color ${this.color}`);
//    }
//
//    area() {
//      // This should be overridden by subclasses
//      throw new Error('The area method must be implemented in the subclass');
//    }
//
//    getDescription() {
//      return `A shape with color ${this.color}`;
//    }
//  }
//
// Key ideas from Shape:
//  - `constructor(color)`
//    - Every shape has a color, so we store it here.
//  - `paint()`
//    - Common method: all shapes can be "painted" with their color.
//  - `area()`
//    - Base class doesn’t know how to calculate area for every shape,
//      so it throws an error to remind you to override it in child classes.
//  - `getDescription()`
//    - Basic text description that subclasses can extend/override.
//
// ==============================
// Rectangle class extending Shape
// ==============================
//
//  - `Rectangle` is a specific type of `Shape`.
//  - It uses `extends Shape` to inherit from the base class.[web:4]
//  - `super(color)` calls the parent `Shape` constructor to set `this.color`.
//  - It adds its own properties `width`, `height` and overrides `area()` and `getDescription()`.
//
//  class Rectangle extends Shape {
//    constructor(width, height, color) {
//      super(color); // Call the parent class constructor to set the color
//      this.width = width;
//      this.height = height;
//    }
//
//    area() {
//      return this.width * this.height;
//    }
//
//    getDescription() {
//      return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
//    }
//  }
//
// Notes on Rectangle:
//  - Inherits:
//    - `color` property
//    - `paint()` method
//    - default `getDescription()` (but we override it)
//  - Defines its own:
//    - `width`, `height`
//    - rectangle-specific `area()` implementation
//    - rectangle-specific `getDescription()` text
//
// ==============================
// Circle class extending Shape
// ==============================
//
//  - Now, instead of the standalone Circle (Assignment #1),
//    we make Circle inherit from Shape.
//  - It reuses color logic from Shape and only focuses on radius and area formula.
//
//  class Circle extends Shape {
//    constructor(radius, color) {
//      super(color); // Call the parent class constructor to set the color
//      this.radius = radius;
//    }
//
//    area() {
//      return Math.PI * this.radius * this.radius;
//    }
//
//    getDescription() {
//      return `A circle with radius ${this.radius} and color ${this.color}`;
//    }
//  }
//
// Notes on Circle:
//  - Inherits from Shape:
//    - `color`
//    - `paint()`
//    - base `getDescription()` (but we provide a more specific one)
//  - Adds:
//    - `radius`
//    - circle-specific `area()` implementation
//
// ==============================
// Trying it out
// ==============================
//
//  const circle = new Circle(20, "blue");
//  console.log(circle.area());         // Uses Circle's area()
//  circle.paint();                     // Inherited from Shape
//  console.log(circle.getDescription()); // Circle's custom description
//
//  const rect = new Rectangle(10, 5, "green");
//  console.log(rect.area());           // Uses Rectangle's area()
//  rect.paint();                       // Inherited from Shape
//  console.log(rect.getDescription()); // Rectangle's custom description
//
// What you should take away
//  - Use a base class (Shape) for shared data/behavior (color, paint, basic description).
//  - Use `extends` and `super()` to build more specific classes (Rectangle, Circle).
//  - Override methods like `area()` and `getDescription()` in child classes
//    to provide shape-specific logic.
//  - This keeps your code DRY (Don’t Repeat Yourself) and easier to maintain.[web:4]
//
// ==============================
// End of "Inheritance in classes" notes
// ==============================
// ==============================
// Some more classes - Notes
// ==============================
//
// Date
//  - The Date object represents a single point in time (date + time).
//  - `new Date()` with no arguments gives the current date and time.[web:36]
//  - Common use cases: timestamps, logging, scheduling, showing "last updated", etc.
//  - `toISOString()` converts the date to a standard string format (UTC time).
//
//  const now = new Date();              // Current date and time[web:35]
//  console.log(now.toISOString());      // Example: "2026-02-21T07:40:12.345Z"
//
//  - You can also create specific dates by passing arguments:
//
//    // year, month(0-based), day, hour, minute, second, ms
//    const christmas = new Date(2025, 11, 25, 0, 0, 0, 0);
//    console.log(christmas.toString());
//
//  - Important Date methods (just to know names for now):
//    - getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), etc.[web:45]
//    - setFullYear(), setMonth(), ... to change parts of the date.
//
// Maps
//  - Map is a built-in data structure to store key-value pairs.[web:40]
//  - Keys in a Map can be of any type (string, number, object, function, Date, etc.).[web:43]
//  - Map remembers insertion order of keys, unlike normal objects where order is not guaranteed.
//  - Basic operations:
//    - `set(key, value)`   -> add/update a key-value pair
//    - `get(key)`          -> read the value for a key
//    - `has(key)`          -> check if a key exists
//    - `delete(key)`       -> remove a key
//    - `size`              -> number of entries in the Map[web:49]
//
//  const map = new Map();
//  map.set('name', 'Alice');
//  map.set('age', 30);
//
//  console.log(map.get('name'));  // "Alice"
//  console.log(map.has('age'));   // true
//  console.log(map.size);         // 2
//
// Using complex keys in Map
//  - Unlike plain objects (where keys are always strings/symbols),
//    Map can use real objects or dates directly as keys.[web:41]
//  - This is useful when you want to attach data to a specific object or time.
//
//  const user = { id: 1, name: 'Rishu' };
//  const loginTime = new Date();
//
//  const sessions = new Map();
//  sessions.set(user, loginTime);
//
//  console.log(sessions.get(user)); // prints the Date stored for that user
//
// When to use Map vs Object
//  - Use Object when:
//    - You just need a simple structure with string keys (like a record).
//  - Use Map when:[web:43]
//    - You need keys of any type (objects, dates, etc.).
//    - You frequently add/remove entries and care about insertion order.
//    - You want built-in methods like set, get, has, size, forEach.
//
// Summary idea of this page
//  - Date: deal with time-related information (now, specific dates, formatting, comparisons).
//  - Map: flexible key-value store where keys are not limited to strings.
//  - Together, they let you model things like "user -> last login time",
//    "id -> createdAt date", or "Date -> events on that day".
//
// ==============================
// End of "Some more classes" notes
// ==============================
// ==============================
// Promise class - Notes
// ==============================
//
// What is a Promise?
//  - A Promise is an object that represents the eventual result of an asynchronous operation.
//  - It can be in one of three states: pending, fulfilled (resolved), or rejected.[web:29]
//  - Promises help avoid deeply nested callbacks and make async code easier to read and chain.
//  - Common use cases: API calls, file I/O, database queries, timers, etc.[web:20]
//
// Basic idea
//  - "I promise I will give you a value later."
//  - You attach what should happen when the value arrives (success) or if something goes wrong (error)
//    using `.then()` and `.catch()`.
//
// ------------------------------
// Using a function that returns a promise
// ------------------------------
//
// Example: setTimeoutPromisified
//  - You are given a function `setTimeoutPromisified(ms)` that returns a Promise.
//  - It waits for `ms` milliseconds and then resolves.[web:20]
//  - For now, ignore how it is implemented internally and just treat it as a function that
//    returns a Promise which resolves after the delay.
//
//  function setTimeoutPromisified(ms) {
//    return new Promise((resolve) => setTimeout(resolve, ms));
//  }
//
//  function callback() {
//    console.log("3 seconds have passed");
//  }
//
//  setTimeoutPromisified(3000).then(callback);
//
// What’s happening here?
//  - `setTimeoutPromisified(3000)` returns a Promise that will resolve after 3 seconds.
//  - `.then(callback)` means: when the promise resolves, run `callback`.
//  - During those 3 seconds, the rest of your code is free to continue running (non-blocking).
//
// ------------------------------
// Defining your own Promise (fsReadFilePromisified)
// ------------------------------
//
// Example: Promisifying fs.readFile
//  - `fs.readFile` in Node.js uses callbacks: `(err, data) => { ... }`.[web:23]
//  - We want a Promise-based version so that we can use `.then()` / `.catch()` or async/await.
//  - `fsReadFilePromisified(filePath, encoding)` will return a Promise that:
//    - resolves with `data` if reading is successful
//    - rejects with `err` if there is an error
//
//  function fsReadFilePromisified(filePath, encoding) {
//    return new Promise((resolve, reject) => {
//      fs.readFile(filePath, encoding, (err, data) => {
//        if (err) {
//          reject(err);      // move to rejected state with the error
//        } else {
//          resolve(data);    // move to fulfilled state with the file content
//        }
//      });
//    });
//  }
//
// Using fsReadFilePromisified
//  - Once you have this, you can use it like any other Promise-returning function:
//
//  fsReadFilePromisified("example.txt", "utf-8")
//    .then((data) => {
//      console.log("File content:", data);
//    })
//    .catch((err) => {
//      console.error("Error reading file:", err);
//    });
//
// Key Promise concepts shown here
//  1. Creating a Promise
//     - `new Promise((resolve, reject) => { ... })` is how you define your own Promise.[web:29]
//     - Inside, you perform some async operation and then call `resolve(value)` or `reject(error)`.
//  2. Resolving
//     - Call `resolve(result)` when the async operation succeeds.
//     - The Promise moves from `pending` to `fulfilled` and `.then()` handlers run.
//  3. Rejecting
//     - Call `reject(error)` when the async operation fails.
//     - The Promise moves from `pending` to `rejected` and `.catch()` handlers run.
//  4. Chaining
//     - `.then()` returns a new Promise, so you can chain multiple async steps.
//     - Example pattern: `doStep1().then(doStep2).then(doStep3).catch(handleError);`
//
// Why this is useful
//  - Instead of nesting callbacks inside callbacks, you can:
//    - Return Promises from functions
//    - Compose async operations using `.then()` and `.catch()`
//    - Later, use `async/await` syntax on top of these Promise-based functions for even cleaner code.[web:27]
//
// Mental model to remember
//  - Promise = "async value placeholder"
//  - `resolve(value)` = "here is the value".
//  - `reject(err)`   = "something went wrong".
//  - `.then()`       = "what to do when it succeeds".
//  - `.catch()`      = "what to do when it fails".
//
// ==============================
// End of "Promise class" notes
// ==============================
// ==============================
// Callback hell - Notes
// ==============================
//
// What is the problem asking?
//  - You need to write code that:
//    1. logs "hi" after 1 second
//    2. logs "hello" 3 seconds after step 1
//    3. logs "hello there" 5 seconds after step 2[page:51]
//
//  - The key idea: each step depends on the previous one finishing,
//    and each step is asynchronous (uses setTimeout).
//
// What is callback hell?
//  - Callback hell happens when you nest many callbacks inside each other.
//  - The code becomes deeply indented, hard to read, and hard to maintain.[web:22]
//  - Typical pattern:
//
//    doStep1(() => {
//      doStep2(() => {
//        doStep3(() => {
//          // ...
//        });
//      });
//    });
//
//  - For this question, a "solution with callback hell" will look like nested setTimeout calls.
//
// Example: naive nested solution (callback hell shape)
//
//  setTimeout(() => {
//    console.log("hi");
//
//    setTimeout(() => {
//      console.log("hello");
//
//      setTimeout(() => {
//        console.log("hello there");
//      }, 5000);
//
//    }, 3000);
//
//  }, 1000);
//
//  - This works, but you can see the indentation going deeper at every step.
//  - As you add more steps, the code gets uglier and harder to change.
//
// Promisified version
//  - We have a helper function: setTimeoutPromisified(ms)
//  - It returns a Promise that resolves after `ms` milliseconds.[page:51]
//
//  function setTimeoutPromisified(ms) {
//    return new Promise((resolve) => setTimeout(resolve, ms));
//  }
//
//  - Using this, we can avoid deep nesting and instead chain Promises.
//
// Promise-based solution (no callback hell)
//
//  setTimeoutPromisified(1000)
//    .then(() => {
//      console.log("hi");
//      return setTimeoutPromisified(3000);
//    })
//    .then(() => {
//      console.log("hello");
//      return setTimeoutPromisified(5000);
//    })
//    .then(() => {
//      console.log("hello there");
//    })
//    .catch((err) => {
//      console.error("Something went wrong:", err);
//    });
//
// Why this is better
//  - Still does the same timing:
//    - wait 1s -> "hi"
//    - then wait 3s -> "hello"
//    - then wait 5s -> "hello there"
//  - But the shape is flat and readable (a chain), not a pyramid of nested callbacks.[web:27]
//  - Easier to add/remove steps and handle errors in one `.catch()`.
//
// Mental model
//  - Callback hell = deeply nested callbacks, hard to read and reason about.
//  - Promises (and later async/await) let you:
//    - represent async steps as values
//    - compose them in a flat, top-to-bottom style
//    - keep timing and dependencies clear without crazy indentation.
//
// ==============================
// End of "Callback hell" notes
// ==============================
// ==============================
// Async / await syntax - Notes
// ==============================
//
// What is async/await?
//  - async/await is syntax built on top of Promises that lets you write async code
//    in a top‑to‑bottom, synchronous-looking style.[web:20]
//  - `async` marks a function as asynchronous and makes it return a Promise.[web:18]
//  - `await` pauses inside an async function until a Promise settles (fulfills or rejects).
//  - It helps you avoid long chains of `.then()` / `.catch()` and makes the flow easier to read.
//
// How it relates to Promises
//  - Under the hood, async/await still uses Promises.[web:29]
//  - Anything you can do with async/await, you can also do with `.then()` chains.
//  - Think of it as nicer syntax for working with Promises, not a different mechanism.
//
// ------------------------------
// Given helper: setTimeoutPromisified
// ------------------------------
//
//  function setTimeoutPromisified(ms) {
//    return new Promise((resolve) => setTimeout(resolve, ms));
//  }
//
//  - This returns a Promise that resolves after `ms` milliseconds.
//  - With async/await, you can "wait" for this delay using `await`,
//    without nesting callbacks or chaining many `.then()` calls.
//
// ------------------------------
// Assignment (async/await solution)
// ------------------------------
//
// Requirement:
//  1. log "hi" after 1 second
//  2. log "hello" 3 seconds after step 1
//  3. log "hello there" 5 seconds after step 2[page:52]
//
// Provided solution:
//
//  async function solve() {
//    await setTimeoutPromisified(1000);
//    console.log("hi");
//
//    await setTimeoutPromisified(3000);
//    console.log("hello");
//
//    await setTimeoutPromisified(5000);
//    console.log("hi there");
//  }
//
//  solve();
//
// Step-by-step understanding:
//  - `async function solve()`
//    - Declares an async function. It automatically returns a Promise.
//  - `await setTimeoutPromisified(1000);`
//    - Waits 1 second (Promise resolves), then moves to the next line.
//  - `console.log("hi");`
//    - Runs after that 1 second delay.
//  - `await setTimeoutPromisified(3000);`
//    - Now waits another 3 seconds, then logs "hello".
//  - `await setTimeoutPromisified(5000);`
//    - Then waits 5 seconds, then logs "hi there".
//  - Overall timing: 1s -> "hi", +3s -> "hello", +5s -> "hi there".
//
// Why this looks clean
//  - The async code reads from top to bottom like normal synchronous code.
//  - No nested callbacks, no Promise chaining with `.then()`.
//  - The flow of time is very explicit: await delay -> log -> await delay -> log -> ...
//
// ------------------------------
// Things to keep in mind (rules)
// ------------------------------
//
// 1. You can only use `await` inside an `async` function
//    - This is a hard rule: `await` is a syntax error in normal (non-async) functions.[web:20]
//    - Correct:
//
//      async function example() {
//        const value = await somePromise;
//        console.log(value);
//      }
//
//    - Incorrect:
//
//      function example() {
//        const value = await somePromise; // ❌ not allowed here
//      }
//
// 2. No top-level await (in this context)
//    - In many environments (like older Node versions or non‑module scripts),
//      you cannot use `await` directly at the top level of a file.[page:52]
//    - So instead of:
//
//      await setTimeoutPromisified(1000); // ❌ top-level await not allowed here
//
//    - You wrap your logic inside an async function:
//
//      async function main() {
//        await setTimeoutPromisified(1000);
//        console.log("done");
//      }
//
//      main();
//
// 3. Error handling with async/await
//    - To handle errors (rejected Promises), use `try { ... } catch (err) { ... }`:
//
//      async function run() {
//        try {
//          const data = await someFailingPromise();
//          console.log("Data:", data);
//        } catch (err) {
//          console.error("Error:", err);
//        }
//      }
//
//    - This replaces `.then(...).catch(...)` with normal try/catch syntax,
//      which many people find easier to reason about.[web:21]
//
// Mental model
//  - `async` = "this function returns a Promise".
//  - `await` = "pause here until the Promise gives me a result or error".
//  - You still think in Promises, but you write code as if it were synchronous,
//    which makes sequences like the timing assignment much easier to read and write.
//
// ==============================
// End of "Async / await syntax" notes
// ==============================
// =========================================
// Defining your own async function - Notes
// =========================================
//
// Question
//  - Write a function that:
//    1. Reads the contents of a file
//    2. Trims the extra space from the left and right
//    3. Writes it back to the file[page:53]
//
// Core idea
//  - Same logical steps, but implemented in two styles:
//    1. Callback approach
//    2. Promisified / async-await approach
//  - The *work* is identical; only the way you structure async flow changes.[web:20]
//
// -----------------------------------------
// 1. Callback approach
// -----------------------------------------
//
// Function signature (given):
//
//  function onDone() {
//    console.log("file has been cleaned");
//  }
//
//  cleanFile("a.txt", onDone);
//
// What this means
//  - `cleanFile(filePath, callback)` will:
//    - read the file asynchronously
//    - trim whitespace from both sides of the text
//    - write the cleaned text back to the same file
//    - finally, call `callback()` when everything is done
//  - `onDone` is that callback, which just logs a success message.
//
// Typical implementation shape (conceptual):
//
//  function cleanFile(filePath, callback) {
//    fs.readFile(filePath, "utf-8", (err, data) => {
//      if (err) {
//        console.error("Error reading file:", err);
//        return;
//      }
//
//      const cleaned = data.trim();
//
//      fs.writeFile(filePath, cleaned, (err) => {
//        if (err) {
//          console.error("Error writing file:", err);
//          return;
//        }
//
//        // All done
//        callback();
//      });
//    });
//  }
//
// Key points in callback version
//  - Function receives a callback for “what to do after finishing”.
//  - Error handling is done manually inside each callback.
//  - You see nesting: readFile → inside callback → writeFile → inside callback.
//  - This is the classic Node-style, error-first callback pattern.[web:23]
//
// -----------------------------------------
// 2. Promisified / async-await approach
// -----------------------------------------
//
// Function signature (given):
//
//  async function main() {
//    await cleanFile("a.txt");
//    console.log("Done cleaning file");
//  }
//
//  main();
//
// What this means
//  - Now `cleanFile(filePath)` itself returns a Promise.
//  - `main` is an async function that:
//    - waits for `cleanFile("a.txt")` to finish using `await`
//    - then logs "Done cleaning file" afterwards
//  - This style separates *doing the work* from *saying what happens after*,
//    in a much cleaner, linear way.[web:18]
//
// Typical implementation shape (promisified helpers):
//
//  function readFilePromisified(path, encoding) {
//    return new Promise((resolve, reject) => {
//      fs.readFile(path, encoding, (err, data) => {
//        if (err) reject(err);
//        else resolve(data);
//      });
//    });
//  }
//
//  function writeFilePromisified(path, data) {
//    return new Promise((resolve, reject) => {
//      fs.writeFile(path, data, (err) => {
//        if (err) reject(err);
//        else resolve();
//      });
//    });
//  }
//
//  async function cleanFile(filePath) {
//    const data = await readFilePromisified(filePath, "utf-8");
//    const cleaned = data.trim();
//    await writeFilePromisified(filePath, cleaned);
//  }
//
// Then the given main:
//
//  async function main() {
//    await cleanFile("a.txt");
//    console.log("Done cleaning file");
//  }
//
//  main();
//
// Key points in async/await version
//  - `cleanFile`:
//    - reads file (await Promise)
//    - transforms content (trim)
//    - writes file (await Promise)
//  - `main`:
//    - just waits for `cleanFile` to complete, then logs a message
//  - Code reads top-to-bottom, with `await` marking async boundaries.
//  - Error handling can be done with try/catch:
//
//    async function main() {
//      try {
//        await cleanFile("a.txt");
//        console.log("Done cleaning file");
//      } catch (err) {
//        console.error("Error cleaning file:", err);
//      }
//    }
//
// Why this page matters
//  - Shows how **the same async task** can be:
//    - implemented in callback style (pass a function like onDone)
//    - or implemented in Promise/async-await style (return a Promise, use await)
//  - This is the pattern you’ll use again and again when moving old callback APIs
//    to modern async/await friendly code.[web:27]
//
// =========================================
// End of "Defining your own async function" notes
// =========================================
// ======================================================
// err first callback vs rejects in promises - Notes
// ======================================================
//
// Goal of this page
//  - Compare how errors are handled in:
//    1. Node-style error‑first callbacks
//    2. Promise-based APIs (resolve / reject)
//  - Both solve the same problem: "How do we pass back data or an error
//    from an asynchronous operation like fs.readFile?"[web:23]
//
// ------------------------------------------------------
// 1. Callbacks (error‑first pattern)
// ------------------------------------------------------
//
// fs.readFile
//  - Node’s fs.readFile uses an error‑first callback: (err, data) => { ... }[page:54]
//  - Convention:
//    - If an error happened, `err` is non‑null and `data` is usually undefined.
//    - If no error happened, `err` is null and `data` contains the result.
//  - You must always check `if (err)` first before using `data`.
//
//  const fs = require("fs");
//
//  function afterDone(err, data) {
//    if (err) {
//      console.log("Error while reading file");
//    } else {
//      console.log(data);
//    }
//  }
//
//  fs.readFile("a.txt", "utf-8", afterDone);
//
// Understanding this code
//  - `fs.readFile("a.txt", "utf-8", afterDone)`:
//    - Asynchronously reads the file `a.txt` with UTF‑8 encoding.
//    - When it finishes, it calls `afterDone(err, data)`.
//  - Inside `afterDone`:
//    - If there is an error, you handle it in the `if (err)` block.
//    - Otherwise, you safely use `data`.
//
// Pros and cons (callbacks)
//  - Pros:
//    - Simple and direct, very common in older Node.js APIs.
//  - Cons:
//    - Error handling gets duplicated in many callbacks.
//    - Harder to compose multiple async steps without nesting (callback hell).[web:22]
//
// ------------------------------------------------------
// 2. Promises (using reject to propagate errors)
// ------------------------------------------------------
//
// Promisified fs.readFile
//  - Instead of passing a callback, we wrap fs.readFile in a Promise.[page:54]
//  - We call `resolve(data)` when it succeeds and `reject(error)` when it fails.
//
//  const fs = require("fs");
//
//  function readFilePromisified(filePath) {
//    return new Promise(function (resolve, reject) {
//      fs.readFile(filePath, "utf-8", function (err, data) {
//        if (err) {
//          reject("Error while reading file");
//        } else {
//          resolve(data);
//        }
//      });
//    });
//  }
//
//  function onDone(data) {
//    console.log(data);
//  }
//
//  function onError(err) {
//    console.log("Error: " + err);
//  }
//
//  readFilePromisified("a.txt")
//    .then(onDone)
//    .catch(onError);
//
// Understanding this code
//  - `readFilePromisified("a.txt")` returns a Promise.
//  - Inside the Promise:
//    - If fs.readFile gives an error, we call `reject("Error while reading file")`.
//    - If it succeeds, we call `resolve(data)`.
//  - Later, we handle the result with:
//    - `.then(onDone)`  -> runs when Promise is fulfilled (success case).
//    - `.catch(onError)` -> runs when Promise is rejected (error case).[web:29]
//
// Pros and cons (Promises + reject)
//  - Pros:
//    - Error handling is centralized in `.catch` or in `try/catch` when using async/await.
//    - Easier to chain multiple async operations without deep nesting.[web:27]
//  - Cons:
//    - Slightly more complex to set up at first (need to wrap callbacks with new Promise).
//
// ------------------------------------------------------
// Key differences to remember
// ------------------------------------------------------
//
// 1. Shape of the API
//    - Error‑first callback:
//      - Function takes a callback: `fn(args, (err, data) => { ... })`.
//      - You check `if (err)` manually inside each callback.
//    - Promise:
//      - Function returns a Promise: `const p = fn(args);`
//      - You handle success and error with `.then()` / `.catch()` or async/await.[web:23]
//
// 2. How errors are propagated
//    - Error‑first callback:
//      - Error is passed as the first argument to the callback (`err`).
//      - You must check it every time.
//    - Promise:
//      - Error is passed to `reject(err)` inside the Promise executor.
//      - Any `.catch()` (or try/catch around `await`) down the chain can handle it.
//
// 3. Composition
//    - Callbacks:
//      - Combining multiple async actions often leads to nested callbacks.
//    - Promises:
//      - Each `.then()` returns a new Promise, so you get a flat, chainable structure.
//      - With async/await, the code looks almost synchronous.
//
// Mental model
//  - Error‑first callback: "I will call you back with (err, data)."
//  - Promise reject: "I will either fulfill with a value or reject with an error;
//    you can listen for this with then/catch or async/await."
//
// ======================================================
// End of "err first callback vs rejects in promises" notes
// ======================================================

// ==============================
// Assignments - Notes (Week 4)
// ==============================
//
// Try to create a promisified  version of
// setTimeout
// fetck
// fs.readFile
//Exter : Notes assigenment :
//
// Purpose of these assignments
//  - Practice everything from this week: classes, inheritance, Promises, callback hell,
//    async/await, and converting callback-based code into Promise/async‑await style.[web:58]
//  - Focus is on *rewriting* and *structuring* async code, not on learning new APIs.
//
// 1. Classes & Inheritance
//  - Implement and extend classes like Rectangle, Circle, and Shape.
//  - Extract common properties/methods (like color, paint, getDescription) into a base class,
//    then make specific shapes inherit from it using `extends` and `super()`.
//  - Goal: reduce duplication and understand how inheritance organizes related types.
//
// 2. Working with built‑in classes (Date, Map)
//  - Use Date to represent timestamps such as "now", specific dates, or last login times.[web:36]
//  - Use Map to store key‑value data where keys can be objects or dates (not only strings).[web:43]
//  - Typical patterns: user -> lastLoginDate, id -> createdAt, Date -> events.
//
// 3. Callback hell exercise
//  - Given a sequence of time‑based tasks (like logging messages after certain delays),
//    first write them using nested callbacks (showing the “pyramid” structure).
//  - Then refactor using Promises (setTimeoutPromisified) to flatten the flow and
//    avoid deep nesting.[web:59]
//  - This shows why Promises/async‑await are easier to maintain than raw callbacks.
//
// 4. Promise class and promisifying functions
//  - Practice writing `new Promise((resolve, reject) => { ... })` wrappers around
//    callback‑based APIs like `fs.readFile` and `fs.writeFile`.
//  - Return Promises from your own functions so callers can use `.then()` / `.catch()`
//    or `async/await` instead of passing callbacks.[web:61]
//  - Learn the pattern: inside callback, if (err) reject(err); else resolve(data).
//
// 5. Async/await timing exercises
//  - Use the `setTimeoutPromisified(ms)` helper to implement sequences of delays
//    using async/await instead of chained `.then()`.[web:58]
//  - Example pattern:
//      await setTimeoutPromisified(1000); console.log("step 1");
//      await setTimeoutPromisified(2000); console.log("step 2");
//  - Helps you get comfortable reading async code that looks synchronous.
//
// 6. Defining your own async functions
//  - Write async functions like `cleanFile(filePath)` that:
//      - read a file (using a promisified or fs.promises API),
//      - transform its contents (e.g. trim whitespace),
//      - write it back to disk,
//      - return a Promise that resolves when everything is done.[web:62]
//  - Then call these from another async function `main()` using `await` and handle errors
//    with try/catch.
//
// 7. Error handling: callbacks vs Promises
//  - Compare error‑first callback style `(err, data)` with Promise `.catch()` / reject.
//  - Convert callback‑style file operations into Promise‑based versions and then to
//    async/await, making sure you handle failures (bad path, missing file, etc.).[web:61]
//  - Goal: build the habit of always thinking “what happens if this async step fails?”
//
// Overall goal of Week 4 assignments
//  - By the end of these tasks, you should be comfortable:
//    - Designing reusable classes and using inheritance.
//    - Turning callback APIs into Promises.
//    - Writing readable async flows with async/await.
//    - Handling errors cleanly in all of the above.
//  - These are the exact skills you’ll use when working with real APIs, databases,
//    and file systems in Node.js or browser apps.[web:60]
//
// ==============================
// End of "Assignments" notes
// ==============================
