// What is ECMAScript
// What is Javascript?
// What is Node.js?
// What is Bun?

// ECMAScript is a scripting language specification on which Jaya.$crjpt is based. Ecma International c?
// is in charge of standardizing ECMAScript.

// ECMAScript is a scripting language specification standardized by Ecma
// International in the ECMA-262 and ISO/IEC 16262 documents. It serves as the
// guideline or the 'rules' for scripting language design.

// Beyond ECMAScript: JavaScript includes additional features that are not part of
// the ECMAScript specification, like the Document Object Model (DOM)
// manipulation, which is crucial for web development but is not defined by
// ECMAScript.

// Common JS Browser engines
// 1. V8 - Used by google chrome/chromium - C
// https://github.com/v8/v8
// 2. SpiderMonkey - Used by Firefox - C + Rust
// https://spidermonkey.dev/

// V8 Engine: V8 is an open-source JavaScript engine developed by the Chromium
// project for Google Chrome and Chromium web browsers. It's written in C++ and is
// responsible for compiling JavaScript code into native machine code before executing
// it, which greatly improves performance.

// Some smart people took out the V8 engine
// Added some Backend things (filesystem reads) on top
// to create a new RUNTIME to compete with BE languages
// like Java.
// JS was never meant to be run in the backend
// Eventually became very popular and is a popular
// choice of runtime on the backend

// Bun: Bun is a modern JavaScript runtime like Node.js. It is built from the ground up to be fast. It includes a bundler, transpiler, package manager, and a test runner all in one single binary. Bun is designed to improve performance and developer experience by providing a more efficient way to run JavaScript and TypeScript code outside of the browser.

// Other than the fact that JS is single threaded,
// Node.js is slow (multiple reasons for it)
// Some smart people said they wanted to re-write
// the JS runtime for the backend and introduced Bun
// It is a signi
// ficantly faster runtime
// It is written in Zig
// https://github.com/oven-sh/bun

// What can you do with Node.js?
// 1. Create CLIs
// 2. Create a video player
// 3. Create a game
// 4. Create an HTTP Server

// What is an HTTP Server?
// (Hyper Text Transfer Protocol)

// 1. A protocol that is defined for machines to communicate
// 2. Specifically for websites, it is the most common way for your
// website’s frontend to talk to its backend

// How do frontends talk to backends - Wires/routers

// HTTP Protocol
// In the end, its the client throwing some information at a server
// Server doing something with that information
// Server responding back with the final result
// Think of them as functions, where
// 1. Arguments are something the client sends
// 2. Rather than calling a function using its name, the client uses a URL
// 3. Rather than the function body, the server does something with the request
// 4. Rather than the function returning a value, the server responds with some data

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
