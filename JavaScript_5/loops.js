// ========================================================
// Episode 5: Loops in JavaScript Explained
// Course: Codynn JavaScript Complete Beginner Tutorial
// ========================================================

console.log("--- 1. Standard For Loop ---");
for (let i = 1; i <= 5; i++) {
    console.log("For loop count:", i);
}

console.log("\n--- 2. While Loop ---");
let count = 3;
while (count > 0) {
    console.log("Countdown:", count);
    count--;
}

console.log("\n--- 3. Do...While Loop (Runs at least once) ---");
let num = 10;
do {
    console.log("Do...While executed with num =", num);
    num++;
} while (num < 5); // Condition false, but ran once

console.log("\n--- 4. For...of Loop (Iterating Values) ---");
// Best for Arrays, Strings, Sets, Maps (Equivalent to Python 'for x in iterable')
const backendSkills = ["Python", "Django", "DRF", "PostgreSQL"];
for (const skill of backendSkills) {
    console.log("Skill:", skill);
}

console.log("\n--- 5. For...in Loop (Iterating Object Keys) ---");
// Best for Objects (Equivalent to Python 'for key in dict.keys()')
const profile = {
    name: "Abdellah",
    role: "Full-Stack Developer",
    city: "Casablanca"
};

for (const prop in profile) {
    console.log(`${prop}: ${profile[prop]}`);
}

console.log("\n--- 6. Break and Continue ---");
for (let i = 1; i <= 6; i++) {
    if (i === 3) {
        console.log("Skipping 3 (continue)");
        continue;
    }
    if (i === 5) {
        console.log("Stopping at 5 (break)");
        break;
    }
    console.log("Current i =", i);
}

// ========================================================
// ⚡ PRACTICE CHALLENGE (For Abdellah):
// 1. Create an array of 5 project names you want to build.
// 2. Use a for...of loop to print each in uppercase (name.toUpperCase()).
// 3. Write a while loop calculating the sum of numbers from 1 to 10.
// ========================================================
