# ⚡ JavaScript Complete Tutorial & Projects (v2.0 — Full-Stack Edition)

> A hands-on 13-Episode JavaScript curriculum following the **[Codynn JavaScript Complete Beginner Tutorial | Projects](https://www.youtube.com/playlist?list=PLuoGAlGgCSEINVpp3JRx2KQDIJBeyn19Z)** course, upgraded with **Python/Django-to-Frontend JS architectural bridges**, **Zero-XSS `<template>` & `DocumentFragment` rendering**, and **live Mock Django REST Framework (DRF) API integration**.

---

## 👨‍💻 Developer Profile
- **Author:** Abdellah Belmaaris — Junior Full-Stack Developer at **BIMPulse Digital**
- **Core Stack:** Python, Django, Django REST Framework (DRF), PostgreSQL, SQL, HTML5/CSS3, JavaScript (ES6+), React
- **Portfolio:** [abdellah-belmaaris.github.io](https://abdellah-belmaaris.github.io)
- **Obsidian Vault:** `D:\MyDocs\Obsidien\Myspace\JavaScript\`

---

## 🆕 What Was Upgraded in v2.0

1. **Interactive Course Hub (`index.html`)**:
   - Root-level dashboard linking all 13 episodes with category tabs (`Core Language`, `Async & DRF API`, `DOM & Events`, `Capstone App`), live search, and side-by-side **Python/Django Bridge** callouts.
2. **Episode 13 Capstone (`JavaScript_13_TaskManager/`) — Full-Stack Task Manager Pro**:
   - **Zero-XSS DOM Rendering:** Replaced `innerHTML` string concatenation with HTML5 `<template>` cloning, `DocumentFragment` single-reflow batching, and `.textContent` (replacing Django `{% for task in tasks %}`).
   - **Dual Persistence Engine:** Switch live in the UI between **`💾 LocalStorage`** and **`🌐 DRF API`** (`http://localhost:8000/api/tasks/`) with `X-CSRFToken` headers, optimistic updates, and DRF `400 Bad Request` field error rendering.
   - **Pro Features:** Task priority levels (`High`, `Medium`, `Low`), **200ms debounced search**, priority + status filter tabs, and **double-click inline task editing** (`Enter` to save, `Escape` to cancel).
3. **Episode 12 (`JavaScript_12/`) — Security & Event Delegation Upgrade**:
   - **Fixed XSS Vulnerability:** Replaced unsafe `li.innerHTML = '<span>${value}</span>'` with `<template>` + `.textContent`.
   - Added side-by-side comparison of **instant `input` events** vs **300ms debounced input** and added inline item renaming via `e.target.closest()` event delegation.
4. **Episode 11 (`JavaScript_11/`) — Jinja2-to-DOM Playground**:
   - Added `<template>` row cloning, `DocumentFragment` batch insertion, `.replaceChildren()` list clearing, and a live on-screen DOM inspection log.
5. **Episode 10 (`JavaScript_10/`) — Production Async & DRF Fetch**:
   - Added microtask vs macrotask event loop ordering, parallel execution via `Promise.all()` (equivalent to Python `asyncio.gather()`), stale request cancellation with `AbortController`, and live `fetch()` against `http://localhost:8000/api/tasks/` with offline fallback.
6. **Episodes 1–10 Browser Terminal & Navigation**:
   - Added top navigation bars (`🏠 Course Hub | ← Prev | Next →`) across all lessons.
   - Fixed the **"🔄 Re-run Code"** button so top-level `let`/`const` declarations execute inside an isolated function scope without throwing `SyntaxError: Identifier has already been declared`.
   - Added on-screen terminal support for `console.info`, `console.table`, and `console.time` / `console.timeEnd`.

---

## 🗺️ Project Structure

```text
📁 JavaScript-Complete-Beginner-Tutorial--Projects/
├── 📄 index.html                 # 🏠 Interactive Course Hub Dashboard (All 13 Episodes)
├── 📄 runner.js                  # 🖥️ Interactive CLI Runner (Node 1-10 + Browser Launcher 11-13)
├── 📄 package.json               # 📦 Scripts (npm start, npm run hub, npm run ep1..ep13, npm run all)
├── 📁 JavaScript_1/              # Ep 01: Intro, V8 Engine & Console Outputs
├── 📁 JavaScript_2/              # Ep 02: Variables (let, const, var) & 7 Primitive Types
├── 📁 JavaScript_3/              # Ep 03: Operators, Strict Equality (===) & Nullish Coalescing (??)
├── 📁 JavaScript_4/              # Ep 04: Control Flow & Truthy/Falsy Rules ([] & {} are truthy!)
├── 📁 JavaScript_5/              # Ep 05: Loops (for, while, for...of, for...in)
├── 📁 JavaScript_6/              # Ep 06: Functions, Arrow Functions & Lexical Closures
├── 📁 JavaScript_7/              # Ep 07: Arrays & Objects (map, filter, reduce, destructuring)
├── 📁 JavaScript_8/              # Ep 08: Error Handling (try/catch/finally) & Console Profiling
├── 📁 JavaScript_9/              # Ep 09: Modern ES6+ (Template Literals, ?., Rest/Spread)
├── 📁 JavaScript_10/             # Ep 10: Async JS (Promises, Promise.all, AbortController, DRF Fetch)
├── 📁 JavaScript_11/             # Ep 11: DOM Manipulation (<template>, DocumentFragment, classList)
├── 📁 JavaScript_12/             # Ep 12: DOM Events, Debounced Input & Event Delegation
└── 📁 JavaScript_13_TaskManager/ # Ep 13: Capstone Full-Stack Task Manager Pro (LocalStorage + DRF API)
```

---

## 🚀 How to Run

### 1. Launch Interactive Course Hub in Browser
Open `index.html` directly or run:
```powershell
npm run hub
```

### 2. Run with Local Mock DRF API Server (Recommended for Ep 10 & Ep 13)
From the workspace root (`D:\Coding\MyLearning\JavaScript`):
```powershell
npm run dev
# Then open: http://localhost:8000/JavaScript-Complete-Beginner-Tutorial--Projects/index.html
```

### 3. Interactive Terminal Runner
```powershell
npm start          # Interactive menu for Episodes 1–13
npm run all        # Run Episodes 1–10 in sequence in Node.js
npm run ep10       # Run Episode 10 directly
npm run ep13       # Launch Episode 13 Task Manager Pro in browser
```
