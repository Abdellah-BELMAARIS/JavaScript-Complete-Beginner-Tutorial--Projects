// ========================================================
// Episode 8: Error Handling & Debugging in JavaScript
// Course: Codynn JavaScript Complete Beginner Tutorial
// ========================================================

console.log("--- 1. Try...Catch...Finally ---");

try {
    console.log("Attempting to parse invalid JSON...");
    let result = JSON.parse("{ 'invalidJson': true }");
    console.log("Parsed result:", result);
} catch (error) {
    console.warn("Caught an error in catch block!");
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
} finally {
    console.log("Finally block ALWAYS executes (cleanup / closing resources).");
}

console.log("\n--- 2. Throwing Custom Errors ---");
function calculateDiscount(price, discountPercent) {
    if (typeof price !== "number" || typeof discountPercent !== "number") {
        throw new TypeError("Price and discount percentage must be numbers!");
    }
    if (discountPercent < 0 || discountPercent > 100) {
        throw new RangeError("Discount percentage must be between 0 and 100.");
    }
    return price - (price * (discountPercent / 100));
}

try {
    console.log("Discounted price (100, 20%):", calculateDiscount(100, 20)); // 80
    // Uncomment to test error:
    // calculateDiscount(100, 150);
} catch (err) {
    console.error("Discount calculation error:", err.message);
}

console.log("\n--- 3. Useful Console Debugging Utilities ---");
const employees = [
    { id: 1, name: "Abdellah", role: "Full-Stack Dev" },
    { id: 2, name: "Omar", role: "Frontend Dev" },
    { id: 3, name: "Sara", role: "Backend Dev" }
];

console.log("Table View (console.table):");
console.table(employees);

console.time("LoopPerformanceTimer");
for (let i = 0; i < 100000; i++) {
    // dummy loop
}
console.timeEnd("LoopPerformanceTimer");

// ========================================================
// ⚡ PRACTICE CHALLENGE (For Abdellah):
// 1. Write a function validateEmail(email) that throws an Error if email does not contain '@'.
// 2. Wrap a call to validateEmail('invalid-email') in a try...catch block and log the error.
// ========================================================
