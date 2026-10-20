// ========================================================
// ⚡ JAVASCRIPT MASTERCLASS: INTERACTIVE TERMINAL RUNNER
// Author: Abdellah Belmaaris
// ========================================================

const { spawn } = require('child_process');
const path = require('path');
const readline = require('readline');

const lessons = [
    { ep: 1, title: "Introduction, Environment & Outputs", path: "JavaScript_1/script.js" },
    { ep: 2, title: "Variables (var, let, const) & Data Types", path: "JavaScript_2/codyyn.js" },
    { ep: 3, title: "Operators, Expressions & Strict Equality", path: "JavaScript_3/operators.js" },
    { ep: 4, title: "Control Structures (If, Else, Switch, Truthy/Falsy)", path: "JavaScript_4/control_flow.js" },
    { ep: 5, title: "Loops (For, While, Do-While, For..of, For..in)", path: "JavaScript_5/loops.js" },
    { ep: 6, title: "Functions & Arrow Functions (Closures, Callbacks)", path: "JavaScript_6/functions.js" },
    { ep: 7, title: "Arrays & Objects In-Depth (map, filter, reduce)", path: "JavaScript_7/arrays_objects.js" },
    { ep: 8, title: "Error Handling & Debugging (try/catch, throw)", path: "JavaScript_8/error_handling.js" },
    { ep: 9, title: "Modern ES6+ Features (Template strings, ?., Spread)", path: "JavaScript_9/es6_features.js" },
    { ep: 10, title: "Async JavaScript (Promises, Async/Await, Fetch API)", path: "JavaScript_10/async_javascript.js" }
];

function printBanner() {
    console.log("\x1b[36m===============================================================\x1b[0m");
    console.log("\x1b[1m\x1b[33m   ⚡ JAVASCRIPT COMPLETE BEGINNER TUTORIAL | PROJECTS\x1b[0m");
    console.log("\x1b[32m   Full Terminal Interactive Course & Code Runner\x1b[0m");
    console.log("\x1b[36m===============================================================\x1b[0m");
}

function runLesson(epNumber, callback) {
    const lesson = lessons.find(l => l.ep === epNumber);
    if (!lesson) {
        console.log(`\x1b[31m[ERROR] Lesson #${epNumber} not found! Choose 1 to 10.\x1b[0m`);
        if (callback) callback();
        return;
    }

    console.log(`\n\x1b[44m\x1b[37m RUNNING LESSON ${lesson.ep}: ${lesson.title.toUpperCase()} \x1b[0m\n`);
    const fullPath = path.join(__dirname, lesson.path);

    const child = spawn('node', [fullPath], { stdio: 'inherit' });

    child.on('close', (code) => {
        console.log(`\n\x1b[32m✔ Lesson ${lesson.ep} finished with exit code ${code}.\x1b[0m\n`);
        if (callback) callback();
    });
}

function showMenu() {
    printBanner();
    console.log("\x1b[33mAvailable Lessons:\x1b[0m");
    lessons.forEach(l => {
        console.log(`  \x1b[36m[${l.ep}]\x1b[0m ${l.title}`);
    });
    console.log("  \x1b[35m[A]\x1b[0m Run All Lessons in Sequence");
    console.log("  \x1b[31m[Q]\x1b[0m Quit\n");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("\x1b[1mEnter lesson number (1-10) or option: \x1b[0m", (answer) => {
        rl.close();
        const choice = answer.trim().toLowerCase();

        if (choice === 'q') {
            console.log("Happy coding, Abdellah! Keep mastering JavaScript.");
            process.exit(0);
        } else if (choice === 'a') {
            runAll(0);
        } else {
            const num = parseInt(choice, 10);
            if (!isNaN(num) && num >= 1 && num <= 10) {
                runLesson(num, () => {
                    setTimeout(showMenu, 1500);
                });
            } else {
                console.log("\x1b[31mInvalid choice. Please select 1-10, A, or Q.\x1b[0m\n");
                setTimeout(showMenu, 1000);
            }
        }
    });
}

function runAll(index) {
    if (index >= lessons.length) {
        console.log("\x1b[32m\x1b[1m🎉 All 10 lessons completed successfully!\x1b[0m\n");
        setTimeout(showMenu, 1500);
        return;
    }
    runLesson(lessons[index].ep, () => {
        setTimeout(() => runAll(index + 1), 800);
    });
}

// Check command line arguments: e.g. 'node runner.js 3' or 'node runner.js all'
const arg = process.argv[2];
if (arg) {
    if (arg.toLowerCase() === 'all') {
        runAll(0);
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
