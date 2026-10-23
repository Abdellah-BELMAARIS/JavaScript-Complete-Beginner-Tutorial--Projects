// ============================================================================
// Episode 10: Asynchronous JavaScript (Promises, Async/Await, Promise.all & DRF)
// Course: Codynn JavaScript Complete Beginner Tutorial
// Python/Django Bridge:
//   - Python asyncio.gather() -> JS Promise.all() (parallel execution)
//   - Python requests.get()   -> JS two-step await fetch() + await res.json()
//   - HTTP 400/500 errors     -> fetch() does NOT reject! Always check res.ok
// ============================================================================

console.log("--- 1. Event Loop: Synchronous vs Microtasks vs Macrotasks ---");
console.log("1. [Sync] Main call stack starts");

setTimeout(() => {
    console.log("4. [Macrotask] setTimeout callback (0ms timer queue)");
}, 0);

Promise.resolve().then(() => {
    console.log("3. [Microtask] Promise.then() runs BEFORE setTimeout!");
});

console.log("2. [Sync] Main call stack finishes");

// --- 2. Creating & Consuming Promises ---
function simulateDjangoEndpoint(endpoint, delayMs = 250) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const routes = {
                "/api/projects/": [
                    { id: 1, title: "The Modern Journal (Django CMS)", stack: "Django + PostgreSQL" },
                    { id: 2, title: "PyGame 3D Web Arcade", stack: "Python + WebAssembly + Three.js" },
                    { id: 3, title: "Dev-Pulse Telemetry", stack: "Python + Pandas" }
                ],
                "/api/profile/": {
                    developer: "Abdellah Belmaaris",
                    company: "BIMPulse Digital",
                    city: "Casablanca"
                }
            };
            if (routes[endpoint]) {
                resolve(routes[endpoint]);
            } else {
                reject(new Error(`404 Not Found: ${endpoint}`));
            }
        }, delayMs);
    });
}

// --- 3. Parallel Execution with Promise.all() (Replaces sequential waterfalls) ---
async function loadDashboardParallel() {
    console.log("\n--- 2. Parallel API Fetching with Promise.all() ---");
    try {
        // Like Python's await asyncio.gather(fetch_profile(), fetch_projects())
        const [profile, projects] = await Promise.all([
            simulateDjangoEndpoint("/api/profile/", 200),
            simulateDjangoEndpoint("/api/projects/", 200)
        ]);
        console.log("Loaded Profile + Projects in parallel:", {
            developer: profile.developer,
            company: profile.company,
            projectCount: projects.length
        });
    } catch (err) {
        console.error("Parallel fetch error:", err.message);
    }
}

// --- 4. Cancelling Stale Requests with AbortController ---
async function demonstrateAbortController() {
    console.log("\n--- 3. Request Cancellation with AbortController ---");
    const controller = new AbortController();

    // Cancel immediately if request takes longer than 50ms
    const timeoutId = setTimeout(() => controller.abort(), 50);

    try {
        await new Promise((resolve, reject) => {
            controller.signal.addEventListener("abort", () => {
                reject(new DOMException("Stale search request cancelled by AbortController", "AbortError"));
            });
            setTimeout(resolve, 300);
        });
    } catch (err) {
        if (err.name === "AbortError") {
            console.warn("AbortController caught cleanly:", err.message);
        } else {
            console.error(err);
        }
    } finally {
        clearTimeout(timeoutId);
    }
}

// --- 5. Consuming Local Mock DRF API (with graceful fallback) ---
async function fetchTasksFromDrf() {
    console.log("\n--- 4. Fetch API against Local Mock DRF Server ---");
    try {
        const res = await fetch("http://localhost:8000/api/tasks/", {
            headers: { "Accept": "application/json" }
        });

        // CRITICAL: fetch() only rejects on network failure, NOT on HTTP 404/500!
        if (!res.ok) {
            throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }

        const payload = await res.json();
        const tasks = Array.isArray(payload.results) ? payload.results : payload;
        console.log(`Live DRF /api/tasks/ returned ${tasks.length} items:`, tasks.slice(0, 2));
    } catch (err) {
        console.warn(
            "Local Mock DRF server not running on :8000 (Run 'npm run dev' in workspace root). Falling back to simulated DRF payload:",
            err.message
        );
        const fallback = await simulateDjangoEndpoint("/api/projects/", 100);
        console.log("Fallback data loaded:", fallback);
    }
}

async function runAsyncDemo() {
    await loadDashboardParallel();
    await demonstrateAbortController();
    await fetchTasksFromDrf();
}

runAsyncDemo();

// ============================================================================
// ⚡ PRACTICE CHALLENGE (For Abdellah):
// 1. Write a helper `const delay = (ms) => new Promise(res => setTimeout(res, ms));`
// 2. Write a retry wrapper `fetchWithRetry(fn, retries = 3)` using async/await.
// ============================================================================
