// ========================================================
// Episode 10: Asynchronous JavaScript (Promises & Async/Await)
// Course: Codynn JavaScript Complete Beginner Tutorial
// ========================================================

console.log("--- 1. Understanding Asynchronous Execution ---");
console.log("1. Synchronous log");

setTimeout(() => {
    console.log("2. Async log (delayed by 500ms)");
}, 500);

console.log("3. Another synchronous log (executes immediately!)");

console.log("\n--- 2. Creating & Consuming Promises ---");
function simulateDjangoApiRequest(endpoint) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (endpoint === "/api/projects/") {
                resolve([
                    { id: 1, title: "AI WhatsApp Business SaaS", tech: "Django/DRF" },
                    { id: 2, title: "EnginePulseRef", tech: "Python" }
                ]);
            } else {
                reject(new Error("404: Endpoint Not Found"));
            }
        }, 800);
    });
}

// Consuming with .then() and .catch()
simulateDjangoApiRequest("/api/projects/")
    .then(projects => {
        console.log("Promise Resolved! Projects received:", projects);
    })
    .catch(error => {
        console.error("Promise Rejected:", error.message);
    });

console.log("\n--- 3. Modern Async / Await Pattern ---");
async function loadDeveloperData() {
    try {
        console.log("Fetching project list using async/await...");
        const data = await simulateDjangoApiRequest("/api/projects/");
        console.log("Async/Await response success! Total count:", data.length);
        return data;
    } catch (err) {
        console.error("Async error caught:", err.message);
    }
}

loadDeveloperData();

console.log("\n--- 4. Real Fetch API (Consuming JSON API) ---");
async function fetchOnlineTodo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const todo = await response.json();
        console.log("Live API Data from jsonplaceholder:", todo);
    } catch (err) {
        console.warn("Fetch failed (offline or network issue):", err.message);
    }
}

fetchOnlineTodo();

// ========================================================
// ⚡ PRACTICE CHALLENGE (For Abdellah):
// 1. Create a function delay(ms) that returns a Promise resolving after ms milliseconds.
// 2. Use 'await delay(1000)' inside an async function to print "1 second passed!".
// ========================================================
