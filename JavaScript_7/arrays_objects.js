// ========================================================
// Episode 7: Arrays & Objects in JavaScript Explained
// Course: Codynn JavaScript Complete Beginner Tutorial
// ========================================================

console.log("--- 1. Array Basics & Mutating Methods ---");
let technologies = ["Python", "Django", "SQL"];
console.log("Initial:", technologies);

technologies.push("JavaScript"); // Append to end
console.log("After push:", technologies);

let lastItem = technologies.pop(); // Remove last
console.log("Popped item:", lastItem);

technologies.unshift("Git"); // Add to beginning
console.log("After unshift:", technologies);

technologies.shift(); // Remove first
console.log("After shift:", technologies);

console.log("\n--- 2. High-Order Functional Array Methods ---");
const numbers = [10, 15, 20, 25, 30];

// map(): transforms every element (like Python list comprehension)
const doubled = numbers.map(n => n * 2);
console.log("Doubled with map:", doubled);

// filter(): filters elements matching predicate
const greaterThan18 = numbers.filter(n => n > 18);
console.log("Filter > 18:", greaterThan18);

// reduce(): accumulates elements to a single value
const totalSum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Total sum with reduce:", totalSum);

// find(): returns first matching item
const firstFound = numbers.find(n => n > 20);
console.log("First > 20:", firstFound);

console.log("\n--- 3. Objects (Key-Value Dictionaries) ---");
const developer = {
    firstName: "Abdellah",
    lastName: "Belmaaris",
    role: "Junior Full-Stack Developer",
    skills: ["Python", "Django", "SQL", "HTML", "CSS", "JavaScript"],
    isEmployed: true,
    location: {
        city: "Casablanca",
        country: "Morocco"
    },
    // Object method
    greet() {
        return `Hello, I'm ${this.firstName} ${this.lastName} from ${this.location.city}!`;
    }
};

console.log(developer.greet());
console.log("Skills count:", developer.skills.length);
console.log("Keys:", Object.keys(developer));
console.log("Values:", Object.values(developer));

console.log("\n--- 4. Destructuring & Spread Operator ---");
// Object destructuring
const { firstName, role, location: { city } } = developer;
console.log(`Extracted: ${firstName} | Role: ${role} | City: ${city}`);

// Array destructuring
const [primaryLang, framework] = developer.skills;
console.log(`Primary: ${primaryLang}, Framework: ${framework}`);

// Spread operator to clone and extend
const updatedProfile = {
    ...developer,
    portfolio: "https://abdellah-belmaaris.github.io",
    focus: "Full-Stack Web Development"
};
console.log("Updated Profile Portfolio:", updatedProfile.portfolio);

// ========================================================
// ⚡ PRACTICE CHALLENGE (For Abdellah):
// 1. Given: const prices = [10, 25, 50, 75, 100];
//    Use .filter() to keep items over 30, then .map() to apply a 20% tax (* 1.2).
// 2. Destructure 'portfolio' and 'focus' from updatedProfile.
// ========================================================
