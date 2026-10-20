// ========================================================
// Episode 4: Control Structures (If, Else, Switch)
// Course: Codynn JavaScript Complete Beginner Tutorial
// ========================================================

console.log("--- 1. If / Else If / Else ---");
let score = 82;

if (score >= 90) {
    console.log("Grade: A (Excellent)");
} else if (score >= 80) {
    console.log("Grade: B (Very Good)");
} else if (score >= 70) {
    console.log("Grade: C (Good)");
} else if (score >= 50) {
    console.log("Grade: D (Pass)");
} else {
    console.log("Grade: F (Fail)");
}

console.log("\n--- 2. Truthy vs Falsy in JavaScript ---");
// The 8 Falsy values: false, 0, -0, 0n, "", null, undefined, NaN
let falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach(val => {
    console.log(`Value ${String(val)} is falsy:`, !val);
});

// IMPORTANT for Python devs: Empty arrays and objects are TRUTHY in JS!
let emptyArray = [];
let emptyObject = {};
console.log("Boolean([]):", Boolean(emptyArray));   // true! (In Python, bool([]) is False)
console.log("Boolean({}):", Boolean(emptyObject));  // true! (In Python, bool({}) is False)

// How to properly check if array is empty:
if (emptyArray.length === 0) {
    console.log("Array is truly empty (checked by length === 0)");
}

console.log("\n--- 3. Switch Statement ---");
let role = "django_developer";

switch (role) {
    case "django_developer":
        console.log("Stack: Python, Django, DRF, PostgreSQL");
        break; // break stops execution from falling through
    case "frontend_developer":
        console.log("Stack: HTML, CSS, JavaScript, React");
        break;
    case "fullstack_developer":
        console.log("Stack: Django Backend + Modern JS Frontend");
        break;
    default:
        console.log("General software engineer role.");
}

// ========================================================
// ⚡ PRACTICE CHALLENGE (For Abdellah):
// 1. Write an if-else check that checks if a user is an 'admin' AND is active.
// 2. Write a switch-case statement for HTTP status codes: 200, 404, 500.
// ========================================================
