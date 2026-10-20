// ========================================================
// Episode 3: JavaScript Operators & Expressions Explained
// Course: Codynn JavaScript Complete Beginner Tutorial
// ========================================================

console.log("--- 1. Arithmetic Operators ---");
let a = 10;
let b = 3;

console.log("a + b =", a + b); // 13 (Addition)
console.log("a - b =", a - b); // 7  (Subtraction)
console.log("a * b =", a * b); // 30 (Multiplication)
console.log("a / b =", a / b); // 3.3333... (Division - returns float)
console.log("a % b =", a % b); // 1  (Modulo / Remainder)
console.log("a ** b =", a ** b); // 1000 (Exponentiation: 10^3)

let count = 5;
count++;
console.log("count++ =", count); // 6
count--;
console.log("count-- =", count); // 5

console.log("\n--- 2. Assignment Operators ---");
let x = 20;
x += 5; // x = x + 5
console.log("x += 5 ->", x);
x *= 2; // x = x * 2
console.log("x *= 2 ->", x);

console.log("\n--- 3. Comparison Operators (== vs ===) ---");
let num = 5;
let str = "5";

// Loose equality (==) coerces types - AVOID!
console.log("5 == '5':", num == str);   // true (Loose)

// Strict equality (===) checks value AND type - BEST PRACTICE!
console.log("5 === '5':", num === str); // false (Strict)
console.log("5 !== '5':", num !== str); // true (Strict inequality)

console.log("0 == false:", 0 == false);   // true (Loose)
console.log("0 === false:", 0 === false); // false (Strict)

console.log("\n--- 4. Logical Operators (&&, ||, !) ---");
let isUserLoggedIn = true;
let hasAdminRole = false;

// AND (&&) - both must be true (Python 'and')
console.log("isUserLoggedIn && hasAdminRole:", isUserLoggedIn && hasAdminRole); // false

// OR (||) - at least one is true (Python 'or')
console.log("isUserLoggedIn || hasAdminRole:", isUserLoggedIn || hasAdminRole); // true

// NOT (!) - inverts boolean (Python 'not')
console.log("!isUserLoggedIn:", !isUserLoggedIn); // false

console.log("\n--- 5. Nullish Coalescing (??) ---");
// Returns right-hand value only if left is null or undefined
let defaultPort = null;
let activePort = defaultPort ?? 8000;
console.log("activePort:", activePort); // 8000

let zeroPoints = 0;
console.log("zeroPoints || 10:", zeroPoints || 10); // 10 (treats 0 as falsy)
console.log("zeroPoints ?? 10:", zeroPoints ?? 10); // 0 (correct! 0 is a valid number)

console.log("\n--- 6. Ternary Operator (condition ? exprIfTrue : exprIfFalse) ---");
let userAge = 19;
let message = userAge >= 18 ? "Eligible to vote" : "Too young to vote";
console.log("Ternary result:", message);

// ========================================================
// ⚡ PRACTICE CHALLENGE (For Abdellah):
// 1. Declare two variables: price = 120 and isMember = true.
// 2. Use a ternary operator to give a 10% discount if isMember is true.
// 3. Compare '100' === 100 and write a comment on why it evaluates to false.
// ========================================================
