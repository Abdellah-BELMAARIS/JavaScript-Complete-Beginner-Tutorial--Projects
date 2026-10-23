// ============================================================================
// ⚡ JAVASCRIPT MASTERCLASS: INTERACTIVE TERMINAL & BROWSER RUNNER
// Author: Abdellah Belmaaris
// Supports:
//   - Episodes 1–10: Direct Node.js execution in terminal
//   - Episodes 11–13: Browser DOM / Capstone launcher + architecture summary
//   - Option [H]: Opens Interactive Course Hub (index.html)
// ============================================================================

const { spawn, exec } = require("child_process");
const path = require("path");
const readline = require("readline");

const lessons = [
    { ep: 1, type: "node", title: "Introduction, Environment & Outputs", path: "JavaScript_1/script.js", html: "JavaScript_1/index.html" },
    { ep: 2, type: "node", title: "Variables (var, let, const) & Data Types", path: "JavaScript_2/codyyn.js", html: "JavaScript_2/index.html" },
    { ep: 3, type: "node", title: "Operators, Expressions & Strict Equality", path: "JavaScript_3/operators.js", html: "JavaScript_3/index.html" },
    { ep: 4, type: "node", title: "Control Structures (If, Else, Switch, Truthy/Falsy)", path: "JavaScript_4/control_flow.js", html: "JavaScript_4/index.html" },
    { ep: 5, type: "node", title: "Loops (For, While, Do-While, For..of, For..in)", path: "JavaScript_5/loops.js", html: "JavaScript_5/index.html" },
    { ep: 6, type: "node", title: "Functions & Arrow Functions (Closures, Callbacks)", path: "JavaScript_6/functions.js", html: "JavaScript_6/index.html" },
    { ep: 7, type: "node", title: "Arrays & Objects In-Depth (map, filter, reduce)", path: "JavaScript_7/arrays_objects.js", html: "JavaScript_7/index.html" },
    { ep: 8, type: "node", title: "Error Handling & Debugging (try/catch, throw)", path: "JavaScript_8/error_handling.js", html: "JavaScript_8/index.html" },
    { ep: 9, type: "node", title: "Modern ES6+ Features (Template strings, ?., Spread)", path: "JavaScript_9/es6_features.js", html: "JavaScript_9/index.html" },
    { ep: 10, type: "node", title: "Async JS (Promises, Promise.all, AbortController, DRF Fetch)", path: "JavaScript_10/async_javascript.js", html: "JavaScript_10/index.html" },
    { ep: 11, type: "browser", title: "DOM Manipulation (<template> & DocumentFragment)", path: "JavaScript_11/dom_manipulation.js", html: "JavaScript_11/index.html" },
    { ep: 12, type: "browser", title: "DOM Events, Debouncing & Event Delegation (Zero-XSS)", path: "JavaScript_12/dom_events.js", html: "JavaScript_12/index.html" },
    { ep: 13, type: "browser", title: "Capstone: Full-Stack Task Manager Pro (LocalStorage <-> DRF API)", path: "JavaScript_13_TaskManager/app.js", html: "JavaScript_13_TaskManager/index.html" }
];

function openInBrowser(relPath) {
    const fullPath = path.join(__dirname, relPath);
    const cmd = process.platform === "win32"
        ? `start "" "${fullPath}"`
        : process.platform === "darwin"
            ? `open "${fullPath}"`
            : `xdg-open "${fullPath}"`;
    exec(cmd);
}

function printBanner() {
    console.log("\x1b[36m======================================================================\x1b[0m");
    console.log("\x1b[1m\x1b[33m   ⚡ JAVASCRIPT COMPLETE TUTORIAL & PROJECTS (EPISODES 1–13)\x1b[0m");
    console.log("\x1b[32m   Interactive Node.js CLI Runner & Browser DOM Launcher\x1b[0m");
    console.log("\x1b[36m======================================================================\x1b[0m");
}

function runLesson(epNumber, callback) {
    const lesson = lessons.find(l => l.ep === epNumber);
    if (!lesson) {
        console.log(`\x1b[31m[ERROR] Lesson #${epNumber} not found! Choose 1 to 13.\x1b[0m`);
        if (callback) callback();
        return;
    }

    console.log(`\n\x1b[44m\x1b[37m EPISODE ${lesson.ep}: ${lesson.title.toUpperCase()} \x1b[0m\n`);

    if (lesson.type === "browser") {
        console.log(`\x1b[33m🌐 Launching Browser DOM App:\x1b[0m ${lesson.html}`);
        console.log(`\x1b[36m📄 Source File:\x1b[0m ${lesson.path}`);
        openInBrowser(lesson.html);
        if (callback) setTimeout(callback, 600);
        return;
    }

    const fullPath = path.join(__dirname, lesson.path);
    const child = spawn("node", [fullPath], { stdio: "inherit" });

    child.on("close", (code) => {
        console.log(`\n\x1b[32m✔ Episode ${lesson.ep} finished with exit code ${code}.\x1b[0m\n`);
        if (callback) callback();
    });
}

function showMenu() {
    printBanner();
    console.log("\x1b[33mCore & Async Lessons (Node.js + Browser Terminal):\x1b[0m");
    lessons.filter(l => l.type === "node").forEach(l => {
        console.log(`  \x1b[36m[${String(l.ep).padStart(2, " ")}]\x1b[0m ${l.title}`);
    });
    console.log("\n\x1b[33mDOM & Full-Stack Projects (Browser Interactive):\x1b[0m");
    lessons.filter(l => l.type === "browser").forEach(l => {
        console.log(`  \x1b[32m[${l.ep}]\x1b[0m ${l.title}`);
    });
    console.log("\n\x1b[33mCommands:\x1b[0m");
    console.log("  \x1b[35m[A]\x1b[0m Run All Node Lessons (1–10) in Sequence");
    console.log("  \x1b[36m[H]\x1b[0m Open Course Hub Dashboard (index.html) in Browser");
    console.log("  \x1b[31m[Q]\x1b[0m Quit\n");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("\x1b[1mEnter episode (1-13) or option (A / H / Q): \x1b[0m", (answer) => {
        rl.close();
        const choice = answer.trim().toLowerCase();

        if (choice === "q") {
            console.log("Happy coding, Abdellah! Keep mastering Frontend JavaScript.");
            process.exit(0);
        } else if (choice === "a") {
            runAllNode(0);
        } else if (choice === "h") {
            console.log("\x1b[32mOpening Interactive Course Hub (index.html)...\x1b[0m");
            openInBrowser("index.html");
            setTimeout(showMenu, 1000);
        } else {
            const num = parseInt(choice, 10);
            if (!isNaN(num) && num >= 1 && num <= 13) {
                runLesson(num, () => setTimeout(showMenu, 1200));
            } else {
                console.log("\x1b[31mInvalid choice. Please select 1-13, A, H, or Q.\x1b[0m\n");
                setTimeout(showMenu, 1000);
            }
        }
    });
}

function runAllNode(index) {
    const nodeLessons = lessons.filter(l => l.type === "node");
    if (index >= nodeLessons.length) {
        console.log("\x1b[32m\x1b[1m🎉 All 10 Node.js lessons completed successfully!\x1b[0m\n");
        return;
    }
    runLesson(nodeLessons[index].ep, () => {
        setTimeout(() => runAllNode(index + 1), 400);
    });
}

const arg = process.argv[2];
if (arg) {
    const lower = arg.toLowerCase();
    if (lower === "all") {
        runAllNode(0);
    } else if (lower === "hub") {
        openInBrowser("index.html");
    } else {
        const num = parseInt(arg, 10);
        if (!isNaN(num)) {
            runLesson(num);
        } else {
            showMenu();
        }
    }
} else {
    showMenu();
}
