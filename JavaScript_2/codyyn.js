// ========================================================
// Episode 2: Variables & Data Types Explained (var vs let vs const)
// Course: Codynn JavaScript Complete Beginner Tutorial
// ========================================================

// 1. Variable Declarations
// Legacy: 'var' (Function scoped, can be redeclared accidentally - AVOID!)
var oldUser = "Abdellah";
var oldUser = "Belmaaris"; // No error, can cause silent bugs

// Modern: 'let' (Block scoped, reassignable)
let username = "Omar";
console.log("Hello, " + username + "! Welcome to JavaScript programming.");
username = "Abdellah"; // Reassignment works!
console.log("Reassigned username to: " + username);

let age = 19;
console.log("I am " + age + " years old.");
age = 20;
console.log("Next year I will be " + age + " years old.");

// Modern: 'const' (Block scoped, CANNOT be reassigned - DEFAULT CHOICE!)
const country = "Morocco";
console.log("Country:", country);
// country = "Spain"; // ❌ TypeError: Assignment to constant variable.

// Note: const with Arrays and Objects allows mutating contents:
const languages = ["Python", "Django"];
languages.push("JavaScript"); // ✅ Allowed!
console.log("Updated languages array:", languages);

console.log("\n--- 2. Primitive Data Types in JavaScript ---");
let strType = "Hello World";            // String
let numType = 42;                       // Number (64-bit float)
let floatType = 3.14159;                // Number (No separate float type!)
let boolType = true;                    // Boolean (true/false)
let nullType = null;                    // Null (intentional absence of value)
let undefinedType;                      // Undefined (declared but uninitialized)
let bigIntType = 9007199254740991n;     // BigInt
let symbolType = Symbol("uniqueId");    // Symbol

console.log("typeof strType:", typeof strType);               // string
console.log("typeof numType:", typeof numType);               // number
console.log("typeof boolType:", typeof boolType);             // boolean
console.log("typeof undefinedType:", typeof undefinedType);   // undefined
console.log("typeof nullType:", typeof nullType);             // object (Historical JavaScript quirk!)

// ========================================================
// ⚡ PRACTICE CHALLENGE:
// 1. Declare a 'const' for your current profession.
// 2. Declare a 'let' for the number of projects you have built.
// 3. Print both in a single console.log()!
// ========================================================
