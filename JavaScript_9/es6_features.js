// ========================================================
// Episode 9: ES6+ Modern JavaScript Features
// Course: Codynn JavaScript Complete Beginner Tutorial
// ========================================================

console.log("--- 1. Template Literals & Multi-line Strings ---");
const developer = "Abdellah";
const experience = 1;
const message = `
Developer: ${developer}
Years: ${experience}
Status: ${experience >= 1 ? "Junior Full-Stack" : "Intern"}
Calculated: 10 * 5 = ${10 * 5}
`;
console.log(message);

console.log("--- 2. Object Property Shorthand & Computed Properties ---");
const username = "belmaaris";
const email = "abdellah@example.com";
const dynamicKey = "portfolio_url";

const user = {
    username, // Shorthand for username: username
    email,    // Shorthand for email: email
    [dynamicKey]: "https://abdellah-belmaaris.github.io" // Computed property name
};
console.log("User object:", user);

console.log("\n--- 3. Optional Chaining (?.) ---");
// Safe navigation operator - prevents 'Cannot read properties of undefined'
const client = {
    name: "Acme Corp",
    billing: {
        address: {
            city: "Casablanca"
        }
    }
};

console.log("City:", client?.billing?.address?.city); // "Casablanca"
console.log("ZipCode:", client?.billing?.address?.zipCode); // undefined (safe!)
console.log("Phone:", client?.contact?.phone); // undefined (safe! No error thrown)

console.log("\n--- 4. Rest and Spread Operators (...) ---");
// Rest in function args
const average = (...vals) => vals.reduce((a, b) => a + b, 0) / vals.length;
console.log("Average(10, 20, 30, 40):", average(10, 20, 30, 40));

// Spread with Arrays
const frontend = ["HTML", "CSS", "JS"];
const backend = ["Python", "Django", "SQL"];
const fullStack = [...frontend, ...backend, "Git"];
console.log("Combined Stack:", fullStack);

// ========================================================
// ⚡ PRACTICE CHALLENGE (For Abdellah):
// 1. Create an object with nested properties, then use optional chaining (?.) to access a non-existent property.
// 2. Combine two arrays of numbers using the spread operator [...arr1, ...arr2].
// ========================================================
