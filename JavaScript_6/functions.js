// ========================================================
// Episode 6: Functions in JavaScript Explained
// Course: Codynn JavaScript Complete Beginner Tutorial
// ========================================================

console.log("--- 1. Function Declaration (Hoisted) ---");
// Can be called before definition!
console.log(sayHello("Abdellah"));

function sayHello(name) {
    return `Hello, ${name}! Welcome to JavaScript functions.`;
}

console.log("\n--- 2. Function Expression (Not Hoisted) ---");
const sayGoodbye = function(name) {
    return `Goodbye, ${name}!`;
};
console.log(sayGoodbye("Abdellah"));

console.log("\n--- 3. Arrow Functions (ES6) ---");
// Standard arrow function
const add = (a, b) => {
    return a + b;
};
console.log("add(10, 20) =", add(10, 20));

// Concise one-liner with implicit return
const square = x => x * x;
console.log("square(7) =", square(7));

console.log("\n--- 4. Default Parameters & Rest Parameters ---");
// Default parameter (like Python def greet(name="Guest"))
function greetUser(username = "Guest") {
    return `Welcome back, ${username}!`;
}
console.log(greetUser());
console.log(greetUser("Belma"));

// Rest parameters (...args) gathers any number of arguments into an Array
function sumAllNumbers(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}
console.log("sumAllNumbers(1, 2, 3, 4, 5) =", sumAllNumbers(1, 2, 3, 4, 5));

console.log("\n--- 5. Closures ---");
// A closure remembers variables from its outer function scope
function createCounter(start = 0) {
    let count = start;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count
    };
}

const myCounter = createCounter(100);
console.log("Initial:", myCounter.getValue());
console.log("Increment:", myCounter.increment());
console.log("Increment:", myCounter.increment());
console.log("Decrement:", myCounter.decrement());

console.log("\n--- 6. Callback Functions ---");
// Function passed as an argument to another function
function processUserData(user, callback) {
    console.log("Processing user:", user);
    callback(user);
}

processUserData("Abdellah", (name) => {
    console.log(`Notification sent to ${name.toUpperCase()}!`);
});

// ========================================================
// ⚡ PRACTICE CHALLENGE (For Abdellah):
// 1. Write an arrow function 'formatCurrency(amount)' that returns '$' + amount.toFixed(2).
// 2. Create a closure 'createGreeter(greeting)' that returns a function taking a name.
// ========================================================
