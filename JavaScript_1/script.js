// ========================================================
// Episode 1: Introduction to JavaScript, Environment & Console Output
// Course: Codynn JavaScript Complete Beginner Tutorial
// ========================================================

// 1. Console Outputs (Primary tool for developer debugging)
console.log("Hello, JavaScript!");
console.warn("Warning log: Pay attention to this!");
console.error("Error log: Simulating an error notification.");
console.info("Informational message for developer.");

// 2. Interactive Dialogs (Browser environment only)
// Note: alert, prompt, and confirm block browser execution until dismissed.
if (typeof window !== "undefined") {
    // Alert dialog
    alert("Welcome to JavaScript Programming, Abdellah!");

    // Prompt dialog (prompts user for text input)
    let visitorName = prompt("What is your name?", "Abdellah");
    console.log("Visitor name entered:", visitorName);

    // Confirm dialog (returns boolean: true or false)
    let likesCoding = confirm("Do you love full-stack coding with Python & JS?");
    console.log("User likes coding:", likesCoding);
} else {
    console.log("Running in Node.js environment (browser dialogs disabled).");
}

// ========================================================
// ⚡ PRACTICE CHALLENGE (Try it yourself!):
// 1. Open index.html in your browser.
// 2. Open Console (F12).
// 3. Try logging your favorite programming languages using console.log()!
// ========================================================
