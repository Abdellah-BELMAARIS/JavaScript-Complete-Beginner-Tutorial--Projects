# ⚡ JavaScript Complete Mastery: Zero to Full-Stack

> A hands-on JavaScript curriculum following the **[Codynn JavaScript Complete Beginner Tutorial | Projects](https://www.youtube.com/playlist?list=PLuoGAlGgCSEINVpp3JRx2KQDIJBeyn19Z)** course.
> Tailored with side-by-side conceptual bridges for a **Python & Django Full-Stack Developer**.

---

## 👨‍💻 Developer Profile
- **Author:** Abdellah Belmaaris
- **Role:** Junior Full-Stack Developer at BIMPulse Digital
- **Core Stack:** Python, Django, DRF, SQL, HTML, CSS, JavaScript
- **Portfolio:** [abdellah-belmaaris.github.io](https://abdellah-belmaaris.github.io)
- **Obsidian Vault:** `C:\Users\belma\OneDrive\Documents\Obsidian Vault\JavaScript\`

---

## 🗺️ Project Structure & Learning Map

```
📁 JavaScript Complete Beginner Tutorial Projects/
│
├── 📁 JavaScript_1/              # Ep. 1: Introduction, Setup & Console Output
├── 📁 JavaScript_2/              # Ep. 2: Variables (var, let, const) & Data Types
├── 📁 JavaScript_3/              # Ep. 3: Operators & Expressions (Arithmetic, Logical, Strict ===)
├── 📁 JavaScript_4/              # Ep. 4: Control Flow (If / Else If / Else, Switch, Truthy/Falsy)
├── 📁 JavaScript_5/              # Ep. 5: Loops (For, While, Do-While, For..of, For..in)
├── 📁 JavaScript_6/              # Ep. 6: Functions & Arrow Functions (Closures, Scope, Callbacks)
├── 📁 JavaScript_7/              # Ep. 7: Arrays & Objects In-Depth (map, filter, reduce, destructuring)
├── 📁 JavaScript_8/              # Ep. 8: Error Handling & Debugging (try/catch/finally, custom throw)
├── 📁 JavaScript_9/              # Ep. 9: Modern ES6+ Features (Template strings, ?., Spread/Rest)
├── 📁 JavaScript_10/             # Ep. 10: Asynchronous JavaScript (Promises, async/await, Fetch API)
├── 📁 JavaScript_11/             # Ep. 11: DOM Manipulation Fundamentals (Selectors, styles, elements)
├── 📁 JavaScript_12/             # Ep. 12: DOM Events & Event Handling (addEventListener, delegation)
└── 📁 JavaScript_13_TaskManager/ # Capstone Project: Full Interactive Task Manager App
```

---

## 📚 Episode Breakdown

| Episode | Folder | Core Concepts & Highlights | Practice File |
|:---:|:---|:---|:---|
| **01** | [`JavaScript_1/`](./JavaScript_1/) | V8 Engine, console methods (`log`, `warn`, `error`), modal dialogs (`alert`, `prompt`, `confirm`) | `script.js` |
| **02** | [`JavaScript_2/`](./JavaScript_2/) | `var` vs `let` vs `const`, 7 primitive types + objects, `typeof` quirks | `codyyn.js` |
| **03** | [`JavaScript_3/`](./JavaScript_3/) | Arithmetic, strict equality (`===`), logical (`&&`, `||`, `!`), nullish coalescing (`??`), ternary | `operators.js` |
| **04** | [`JavaScript_4/`](./JavaScript_4/) | `if-else`, truthy & falsy rules (`[]` is truthy!), `switch-case` statements | `control_flow.js` |
| **05** | [`JavaScript_5/`](./JavaScript_5/) | `for`, `while`, `do...while`, `for...of` (values), `for...in` (object keys), `break`/`continue` | `loops.js` |
| **06** | [`JavaScript_6/`](./JavaScript_6/) | Function declarations vs expressions, arrow functions `() =>`, closures, callbacks, rest parameters | `functions.js` |
| **07** | [`JavaScript_7/`](./JavaScript_7/) | Functional methods (`map`, `filter`, `reduce`), Object properties, destructuring, spread operator | `arrays_objects.js` |
| **08** | [`JavaScript_8/`](./JavaScript_8/) | `try...catch...finally`, throwing custom `Error`, `console.table`, `console.time` | `error_handling.js` |
| **09** | [`JavaScript_9/`](./JavaScript_9/) | Template literals (like Python f-strings), optional chaining (`?.`), enhanced object literals | `es6_features.js` |
| **10** | [`JavaScript_10/`](./JavaScript_10/) | Event loop, Promises (`resolve`/`reject`), `async`/`await`, consuming REST APIs with `fetch()` | `async_javascript.js` |
| **11** | [`JavaScript_11/`](./JavaScript_11/) | `querySelector`, modifying text & innerHTML, `classList` API, creating & appending DOM elements | `dom_manipulation.js` |
| **12** | [`JavaScript_12/`](./JavaScript_12/) | Click, input, and submit events, `e.preventDefault()`, high-performance Event Delegation | `dom_events.js` |
| **13** | [`JavaScript_13_TaskManager/`](./JavaScript_13_TaskManager/) | **Full Capstone Project**: Task creation, filtering (All/Active/Completed), delete, `localStorage` persistence | `app.js` |

---

## 🚀 How to Run the Code

### 1. In Terminal via Node.js
Every script (Episodes 1 through 10) can be executed directly from your terminal:
```powershell
node JavaScript_1/script.js
node JavaScript_2/codyyn.js
node JavaScript_3/operators.js
node JavaScript_6/functions.js
node JavaScript_7/arrays_objects.js
node JavaScript_10/async_javascript.js
```

### 2. In Your Browser
Each folder contains an `index.html` file.
- Simply open any `index.html` file in your browser (Chrome, Edge, Firefox).
- Press `F12` (or `Ctrl + Shift + I`) and click the **Console** tab to view the live outputs and interactive logs!

### 3. Launching the Task Manager App (Project 13)
Open `JavaScript_13_TaskManager/index.html` in your browser.
Features included:
- ➕ Add tasks with instant validation.
- フィルター Filter by All, Active, or Completed.
- ✅ Toggle completion with strike-through styling.
- 🗑️ Delete tasks with parent event delegation.
- 💾 Automatic `localStorage` saving (tasks persist across reloads).

---

## 🐍⚡ Python vs. JavaScript: Mental Translation Table

| Feature | Python (Your Background) | JavaScript (What You're Learning) |
|:---|:---|:---|
| **Variables** | Dynamic (`name = "Omar"`) | Explicit block scope: `const` (default) or `let` |
| **String Formatting** | `f"Hello {name}"` | `` `Hello ${name}` `` (Template Literal) |
| **Booleans** | `True`, `False` | `true`, `false` |
| **Empty Value** | `None` | `null` (intentional empty) and `undefined` (uninitialized) |
| **Dictionary / Map** | `{"key": "value"}` | `{ key: "value" }` (Object literal) |
| **List / Array** | `[1, 2, 3]` | `[1, 2, 3]` (Array) |
| **List Comprehension** | `[x * 2 for x in nums]` | `nums.map(x => x * 2)` |
| **Filtering** | `[x for x in nums if x > 2]` | `nums.filter(x => x > 2)` |
| **Functions** | `def foo(a, b): return a + b` | `const foo = (a, b) => a + b;` |
| **Async / Await** | `async def` & `await` (asyncio) | `async function` & `await` (native Event Loop) |
| **API Requests** | `requests.get(url).json()` | `const res = await fetch(url); await res.json();` |
| **Equality** | `==` (value) / `is` (identity) | Always use `===` (strict value & type) |

---

## 📓 Synchronized Obsidian Vault
All lecture notes, Mermaid flowcharts, and cheat sheets are mirrored inside your personal Obsidian Vault:
`C:\Users\belma\OneDrive\Documents\Obsidian Vault\JavaScript\`
- Start by opening `00 - 🗺️ JavaScript Map of Content (MOC).md` for the interactive roadmap.
- Refer to `14 - 🐍⚡ Python vs JavaScript Cheat Sheet.md` for fast everyday syntax lookups.
